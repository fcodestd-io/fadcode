// ====== Semua konten portfolio diedit di sini ======

export interface Project {
  title: string;
  icon: string;
  desc: string;
  stack: string[];
  demo: string;
  repo: string;
}
export interface SkillGroup {
  group: string;
  icon: string;
  items: string[];
}
export interface Link {
  label: string;
  href: string;
  icon: string;
}

export const me = {
  name: "Fadillah Maulana",
  handle: "FadCode",
  age: 18,
  since: 2023,
};

export const roles = [
  "Software Engineer",
  "Laravel Developer",
  "React & Next.js Developer",
];

// Isi untuk menampilkan tautan kontak (kosongkan = tidak tampil)
export const contact = {
  email: "",
  github: "",
  linkedin: "",
};

export const projects: Project[] = [
  {
    title: "Hotel Booking",
    icon: "hotel",
    desc: "Aplikasi pemesanan kamar hotel: tamu mencari kamar, masuk lewat akun Google, lalu membayar online dengan Midtrans.",
    stack: ["Laravel", "Tailwind", "OAuth", "Midtrans", "MySQL"],
    demo: "",
    repo: "",
  },
  {
    title: "Fruit Store POS",
    icon: "shopping-basket",
    desc: "Kasir untuk toko buah. Halaman terasa cepat karena interaksi dikerjakan di sisi server dengan sedikit JavaScript.",
    stack: ["Laravel", "MySQL", "HTMX", "Alpine", "Tailwind"],
    demo: "",
    repo: "",
  },
  {
    title: "Library Management System",
    icon: "library",
    desc: "Sistem perpustakaan untuk mengelola buku, anggota, dan peminjaman dalam satu dasbor.",
    stack: ["Laravel", "MySQL", "Tailwind", "Livewire", "Alpine"],
    demo: "",
    repo: "",
  },
];

export const skills: SkillGroup[] = [
  {
    group: "Bahasa",
    icon: "braces",
    items: ["PHP", "JavaScript", "TypeScript", "Go"],
  },
  {
    group: "Backend",
    icon: "server",
    items: ["Laravel", "Livewire", "Node.js", "MySQL"],
  },
  {
    group: "Frontend & mobile",
    icon: "layout-dashboard",
    items: ["React", "Next.js", "Expo"],
  },
  { group: "Alat", icon: "wrench", items: ["Git"] },
];

export const links: Link[] = [
  {
    label: "Email",
    href: contact.email ? `mailto:${contact.email}` : "",
    icon: "mail",
  },
  { label: "GitHub", href: contact.github, icon: "github" },
  { label: "LinkedIn", href: contact.linkedin, icon: "linkedin" },
].filter((l) => l.href);
