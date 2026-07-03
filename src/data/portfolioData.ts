import type { Project, Skill, SocialLink } from "../types";

export const projects: Project[] = [
  {
    id: 1,
    title: "SiTugas",
    description:
      "Website untuk mengelola tugas siswa. Fitur termasuk manajemen tugas, pengumpulan, dan penilaian.",
    image: "/project-1.png", // ganti dengan path gambar kamu
    techStack: ["Laravel", "PHP", "MySQL"],
    githubUrl: "https://github.com/kayshislovee/SiTugas.git",
    
    featured: true,
  },
  {
    id: 2,
    title: "Lenovo Arena",
    description:
      "Website promosi untuk berbagai produk laptop dari Lenovo. Menampilkan katalog produk dan spesifikasi",
    image: "/project-2.png",
    techStack: ["HTML","CSS"],
    githubUrl: "https://github.com/kayshislovee/Lenovo-Arena-Web.git",
    featured: true,
  },
  {
    id: 3,
    title: "Web Informatif Jurusan DPIB",
    description:
      "Website informatif untuk jurusan DPIB. Menyediakan informasi tentang program studi, kegiatan, dan berita terbaru.",
    image: "/project-3.png",
    techStack: ["HTML","CSS","JavaScript","PHP"],
    githubUrl: "https://github.com/kayshislovee/Project-Web-informatif-Jurusan-DPIB.git",
    featured: true,
  },
];

export const skills: Skill[] = [
  // Languages
  { name: "TypeScript", icon: "", category: "Language" },
  { name: "JavaScript", icon: "", category: "Language" },
  { name: "PHP", icon: "", category: "Language" },

  
  // Frameworks
  { name: "React", icon: "", category: "Framework" },
  { name: "Laravel", icon: "", category: "Framework" },
  // Tools
  { name: "Git", icon: "", category: "Tool" },
  { name: "Canva", icon: "", category: "Tool" },
  { name: "VS Code", icon: "", category: "Tool" },
];
export const categoryInfo: Record<string, { icon: string; description: string }> = {
  Language: {
    icon: ">_",
    description: "Bahasa pemrograman yang sering saya gunakan.",
  },
  Framework: {
    icon: "⚡",
    description: "Tools andalan untuk membangun aplikasi modern.",
  },
  Tool: {
    icon: "🎨",
    description: "Tools pendukung desain dan pengembangan.",
  },
};


export const socialLinks: SocialLink[] = [
  { platform: "GitHub", url: "https://github.com/kayshislovee", icon: "github" },
  { platform: "LinkedIn", url: "https://www.linkedin.com/in/ilham-offc-75b74541b/", icon: "linkedin" },
  { platform: "Email", url: "mailto:ilham.offc1012@gmail.com", icon: "mail" },
];

export const personalInfo = {
  name: "Kayshii",
  role: "Frontend Developer",
  tagline: "I build fast, beautiful, and user-friendly web interfaces.",
  about: `Hi, I'm Kayshii. I build accessible, pixel-perfect, and performant web experiences that blend design and engineering.`,
  location: "Bali, Indonesia",
  cvUrl: "/cv-kayshii.pdf",
};
