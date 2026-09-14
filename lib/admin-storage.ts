/** LocalStorage-backed data for the static /admin dashboard. */

export type InquiryStatus = "New" | "In review" | "Closed";

export type Inquiry = {
  id: string;
  name: string;
  email: string;
  company: string;
  service: string;
  message: string;
  status: InquiryStatus;
  createdAt: string;
};

export type ManagedService = {
  id: string;
  title: string;
  status: "Active" | "Paused";
  monthlyRetainers: number;
};

export type DashboardStats = {
  revenue: number[];
  clients: number;
  activeProjects: number;
};

const KEYS = {
  inquiries: "ainexa.inquiries",
  services: "ainexa.services",
  stats: "ainexa.stats",
} as const;

const DEFAULT_INQUIRIES: Inquiry[] = [
  {
    id: "inq-1001",
    name: "Maya Chen",
    email: "maya.chen@northpeak.example",
    company: "Northpeak Capital",
    service: "Custom Software Development",
    message:
      "We need a secure client reporting portal to replace our current spreadsheet workflow. Looking for a discovery call this month.",
    status: "In review",
    createdAt: "2026-08-28T09:12:00.000Z",
  },
  {
    id: "inq-1002",
    name: "Omar Khalid",
    email: "omar@orbitlogistics.example",
    company: "Orbit Logistics",
    service: "Mobile App Development",
    message:
      "Interested in extending our driver app with offline proof-of-delivery and WhatsApp status alerts for customers.",
    status: "New",
    createdAt: "2026-09-02T14:40:00.000Z",
  },
  {
    id: "inq-1003",
    name: "Priya Shah",
    email: "priya@heliohealth.example",
    company: "Helio Health",
    service: "AI Bots & Automation",
    message:
      "We want a WhatsApp assistant for appointment prep. Must escalate clinical questions to a nurse queue.",
    status: "New",
    createdAt: "2026-09-05T11:05:00.000Z",
  },
];

const DEFAULT_SERVICES: ManagedService[] = [
  { id: "svc-1", title: "Custom Software Development", status: "Active", monthlyRetainers: 6 },
  { id: "svc-2", title: "Professional Web Development", status: "Active", monthlyRetainers: 9 },
  { id: "svc-3", title: "AI Bots & Automation", status: "Active", monthlyRetainers: 5 },
  { id: "svc-4", title: "Digital Marketing & SEO", status: "Active", monthlyRetainers: 4 },
  { id: "svc-5", title: "UI/UX Design", status: "Active", monthlyRetainers: 3 },
  { id: "svc-6", title: "Mobile App Development", status: "Paused", monthlyRetainers: 2 },
  { id: "svc-7", title: "Cloud Solutions", status: "Active", monthlyRetainers: 3 },
];

const DEFAULT_STATS: DashboardStats = {
  revenue: [42, 48, 51, 47, 62, 70, 68, 79, 84, 91, 96, 108],
  clients: 48,
  activeProjects: 17,
};

function read<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;
  try {
    const raw = window.localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

function write<T>(key: string, value: T) {
  window.localStorage.setItem(key, JSON.stringify(value));
}

export function seedAdminStorage() {
  if (typeof window === "undefined") return;
  if (!window.localStorage.getItem(KEYS.inquiries)) write(KEYS.inquiries, DEFAULT_INQUIRIES);
  if (!window.localStorage.getItem(KEYS.services)) write(KEYS.services, DEFAULT_SERVICES);
  if (!window.localStorage.getItem(KEYS.stats)) write(KEYS.stats, DEFAULT_STATS);
}

export function getInquiries(): Inquiry[] {
  return read(KEYS.inquiries, DEFAULT_INQUIRIES);
}

export function saveInquiries(items: Inquiry[]) {
  write(KEYS.inquiries, items);
}

export function addInquiry(input: Omit<Inquiry, "id" | "status" | "createdAt">) {
  const items = getInquiries();
  const next: Inquiry = {
    ...input,
    id: `inq-${Date.now()}`,
    status: "New",
    createdAt: new Date().toISOString(),
  };
  saveInquiries([next, ...items]);
  return next;
}

export function updateInquiryStatus(id: string, status: InquiryStatus) {
  saveInquiries(getInquiries().map((item) => (item.id === id ? { ...item, status } : item)));
}

export function getManagedServices(): ManagedService[] {
  return read(KEYS.services, DEFAULT_SERVICES);
}

export function saveManagedServices(items: ManagedService[]) {
  write(KEYS.services, items);
}

export function getDashboardStats(): DashboardStats {
  return read(KEYS.stats, DEFAULT_STATS);
}
