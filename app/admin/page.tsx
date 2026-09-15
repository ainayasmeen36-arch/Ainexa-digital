import { AdminDashboard } from "@/components/admin/admin-dashboard";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Studio dashboard",
  description: "Internal AINEXA studio dashboard.",
  path: "/admin/",
  index: false,
});

export default function AdminPage() {
  return <AdminDashboard />;
}
