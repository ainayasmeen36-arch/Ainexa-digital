"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import {
  Bell,
  Briefcase,
  LayoutDashboard,
  LogOut,
  Plus,
  Users,
  Wallet,
} from "lucide-react";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import {
  getDashboardStats,
  getInquiries,
  getManagedServices,
  saveManagedServices,
  seedAdminStorage,
  updateInquiryStatus,
  type Inquiry,
  type InquiryStatus,
  type ManagedService,
} from "@/lib/admin-storage";
import { COMPANY } from "@/lib/data";

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export function AdminDashboard() {
  const [ready, setReady] = useState(false);
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [services, setServices] = useState<ManagedService[]>([]);
  const [stats, setStats] = useState(() => ({ revenue: Array(12).fill(0) as number[], clients: 0, activeProjects: 0 }));
  const [newTitle, setNewTitle] = useState("");

  function refresh() {
    setInquiries(getInquiries());
    setServices(getManagedServices());
    setStats(getDashboardStats());
  }

  useEffect(() => {
    seedAdminStorage();
    refresh();
    setReady(true);
  }, []);

  const chartData = useMemo(
    () => stats.revenue.map((value, index) => ({ month: MONTHS[index], revenue: value })),
    [stats.revenue]
  );

  const newCount = inquiries.filter((item) => item.status === "New").length;

  function onStatus(id: string, status: InquiryStatus) {
    updateInquiryStatus(id, status);
    refresh();
  }

  function toggleService(id: string) {
    const next: ManagedService[] = services.map((item) =>
      item.id === id
        ? { ...item, status: item.status === "Active" ? ("Paused" as const) : ("Active" as const) }
        : item
    );
    saveManagedServices(next);
    setServices(next);
  }

  function addService() {
    const title = newTitle.trim();
    if (!title) return;
    const next = [
      ...services,
      { id: `svc-${Date.now()}`, title, status: "Active" as const, monthlyRetainers: 0 },
    ];
    saveManagedServices(next);
    setServices(next);
    setNewTitle("");
  }

  if (!ready) {
    return <div className="flex min-h-screen items-center justify-center bg-navy text-electric">Loading studio…</div>;
  }

  return (
    <div className="min-h-screen bg-[#14110E] text-slate-100">
      <div className="grid min-h-screen lg:grid-cols-[240px_1fr]">
        <aside className="hidden border-r border-white/10 bg-[#1A1714] p-5 lg:block">
          <Link href="/" className="flex items-center gap-2 font-heading text-lg font-semibold">
            <span className="flex h-8 w-8 items-center justify-center rounded-md bg-electric text-navy">A</span>
            AINEXA
          </Link>
          <nav className="mt-10 space-y-1 text-sm">
            <p className="flex items-center gap-2 rounded-lg bg-white/10 px-3 py-2 text-electric">
              <LayoutDashboard className="h-4 w-4" /> Overview
            </p>
            <p className="flex items-center gap-2 px-3 py-2 text-slate-400">
              <Briefcase className="h-4 w-4" /> Projects
            </p>
            <p className="flex items-center gap-2 px-3 py-2 text-slate-400">
              <Users className="h-4 w-4" /> Clients
            </p>
          </nav>
          <Link href="/" className="mt-16 flex items-center gap-2 px-3 text-sm text-slate-400 hover:text-electric">
            <LogOut className="h-4 w-4" /> Back to site
          </Link>
        </aside>

        <div>
          <header className="flex items-center justify-between border-b border-white/10 px-4 py-4 sm:px-8">
            <div>
              <p className="text-xs uppercase tracking-wider text-electric">Local studio dashboard</p>
              <h1 className="font-heading text-xl font-semibold">Welcome back, {COMPANY.owner}</h1>
            </div>
            <div className="flex items-center gap-2">
              <span className="relative">
                <Bell className="h-5 w-5 text-slate-300" />
                {newCount > 0 && (
                  <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-electric" />
                )}
              </span>
              <ModeToggle />
              <Link href="/" className="text-sm text-slate-300 hover:text-electric lg:hidden">
                Site
              </Link>
            </div>
          </header>

          <div className="space-y-8 p-4 sm:p-8">
            <div className="grid gap-4 sm:grid-cols-3">
              <Card className="border-white/10 bg-white/5 text-white">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium text-slate-300">YTD revenue (k USD)</CardTitle>
                  <Wallet className="h-4 w-4 text-electric" />
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-semibold">{stats.revenue.reduce((a, b) => a + b, 0)}</p>
                  <p className="text-xs text-slate-400">Stored locally — edit demo numbers in LocalStorage if needed.</p>
                </CardContent>
              </Card>
              <Card className="border-white/10 bg-white/5 text-white">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium text-slate-300">Total clients</CardTitle>
                  <Users className="h-4 w-4 text-electric" />
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-semibold">{stats.clients}</p>
                </CardContent>
              </Card>
              <Card className="border-white/10 bg-white/5 text-white">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium text-slate-300">Active projects</CardTitle>
                  <Briefcase className="h-4 w-4 text-electric" />
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-semibold">{stats.activeProjects}</p>
                </CardContent>
              </Card>
            </div>

            <Card className="border-white/10 bg-white/5 text-white">
              <CardHeader>
                <CardTitle>Revenue trend</CardTitle>
              </CardHeader>
              <CardContent className="h-72">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={chartData}>
                    <defs>
                      <linearGradient id="rev" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#C6A46B" stopOpacity={0.45} />
                        <stop offset="95%" stopColor="#C6A46B" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.08)" />
                    <XAxis dataKey="month" stroke="#94a3b8" />
                    <YAxis stroke="#94a3b8" />
                    <Tooltip
                      contentStyle={{ background: "#1A1714", border: "1px solid rgba(198,164,107,0.35)" }}
                    />
                    <Area type="monotone" dataKey="revenue" stroke="#C6A46B" fill="url(#rev)" />
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card className="border-white/10 bg-white/5 text-white">
              <CardHeader>
                <CardTitle>Inquiry management</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow className="border-white/10 hover:bg-transparent">
                      <TableHead className="text-slate-400">Name</TableHead>
                      <TableHead className="text-slate-400">Company</TableHead>
                      <TableHead className="text-slate-400">Service</TableHead>
                      <TableHead className="text-slate-400">Status</TableHead>
                      <TableHead className="text-slate-400">Action</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {inquiries.map((item) => (
                      <TableRow key={item.id} className="border-white/10">
                        <TableCell>
                          <p className="font-medium">{item.name}</p>
                          <p className="text-xs text-slate-400">{item.email}</p>
                        </TableCell>
                        <TableCell>{item.company || "—"}</TableCell>
                        <TableCell>{item.service}</TableCell>
                        <TableCell>
                          <Badge variant={item.status === "New" ? "electric" : "outline"}>{item.status}</Badge>
                        </TableCell>
                        <TableCell>
                          <select
                            className="h-9 rounded-md border border-white/15 bg-[#1A1714] px-2 text-xs"
                            value={item.status}
                            onChange={(event) => onStatus(item.id, event.target.value as InquiryStatus)}
                          >
                            <option>New</option>
                            <option>In review</option>
                            <option>Closed</option>
                          </select>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            <Card className="border-white/10 bg-white/5 text-white">
              <CardHeader>
                <CardTitle>Services management</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-col gap-2 sm:flex-row">
                  <Input
                    value={newTitle}
                    onChange={(event) => setNewTitle(event.target.value)}
                    placeholder="Add a service line"
                    className="border-white/15 bg-white/5 text-white"
                  />
                  <Button type="button" variant="electric" onClick={addService}>
                    <Plus className="h-4 w-4" /> Add
                  </Button>
                </div>
                <div className="grid gap-3 md:grid-cols-2">
                  {services.map((service) => (
                    <div
                      key={service.id}
                      className="flex items-center justify-between rounded-xl border border-white/10 px-4 py-3"
                    >
                      <div>
                        <p className="font-medium">{service.title}</p>
                        <p className="text-xs text-slate-400">{service.monthlyRetainers} retainers</p>
                      </div>
                      <Button size="sm" variant="outline" onClick={() => toggleService(service.id)}>
                        {service.status}
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
