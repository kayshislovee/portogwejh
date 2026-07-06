import type { Project, Skill, SocialLink } from "../types";


import { Code2, Zap, Palette, type LucideIcon } from "lucide-react";
export const projects: Project[] = [
  {
    id: 1,
    title: "SiTugas",
    description:
      "Website untuk mengelola tugas siswa. Fitur termasuk manajemen tugas, pengumpulan, dan penilaian.",
    image: new URL("../assets/images/situgas.png", import.meta.url).href,
    techStack: ["Laravel", "PHP","HTML","CSS","JavaScript", "MySQL"],
    githubUrl: "https://github.com/kayshislovee/SiTugas.git",
    
    featured: true,
  },
  {
    id: 2,
    title: "Lenovo Arena",
    description:
      "Website promosi untuk berbagai produk laptop dari Lenovo. Menampilkan katalog produk dan spesifikasi",
    image: new URL("../assets/images/weblenovo.png", import.meta.url).href,
    techStack: ["HTML","CSS"],
    githubUrl: "https://github.com/kayshislovee/Lenovo-Arena-Web.git",
    featured: true,
  },
  {
    id: 3,
    title: "Web Informatif Jurusan DPIB",
    description:
      "Website informatif untuk jurusan DPIB. Menyediakan informasi tentang program studi, kegiatan, dan berita terbaru.",
    image: new URL("../assets/images/webdpib.png", import.meta.url).href,
    techStack: ["HTML","CSS","JavaScript","PHP"],
    githubUrl: "https://github.com/kayshislovee/Project-Web-informatif-Jurusan-DPIB.git",
    featured: true,
  },
  {
    id: 4,
    title: "Play Chess",
    description:
      "Website permainan catur 1 lawan 1. Pemain dapat bermain melawan teman dengan antarmuka yang sederhana dan responsif.",
    image: new URL("../assets/images/chess.jpeg", import.meta.url).href,
    techStack: ["HTML","CSS","JavaScript", "MySQL"],
    githubUrl: "https://github.com/kayshislovee/ProjekGame-chess-.git",
    
    featured: true,
  },
  {
    id: 5,
    title: "PetVerse",
    description:
      "Game berbasis 2D.Pemain dapat mengendalikan karakter hewan dan makan dan menghindari bomb. Tujuan permainan adalah bertahan hidup selama mungkin sambil mengumpulkan skor.",
    image: new URL("../assets/images/petverse.png", import.meta.url).href,
    techStack: ["Python","Pygame"],
    githubUrl: "https://github.com/kayshislovee/SiTugas.git",
    
    featured: true,
  },
  
  
];

export const skills: Skill[] = [
  // Languages
  { name: "TypeScript", icon: "TS", category: "Language" },
  { name: "JavaScript", icon: "JS", category: "Language" },
  { name: "PHP", icon: "PHP", category: "Language" },

  // Frameworks
  { name: "React", icon: "⚛", category: "Framework" },
  { name: "Laravel", icon: "L", category: "Framework" },

  // Tools
  { name: "Git", icon: "G", category: "Tool" },
  { name: "Canva", icon: "C", category: "Tool" },
  { name: "VS Code", icon: "VS", category: "Tool" },
];
export const categoryInfo: Record<string, { icon: LucideIcon; description: string }> = {
  Language: {
    icon: Code2,  
    description: "Bahasa pemrograman yang sering saya gunakan.",
  },
  Framework: {
    icon: Zap,    
    description: "Tools andalan untuk membangun aplikasi modern.",
  },
  Tool: {
    icon: Palette,
    description: "Tools pendukung desain dan pengembangan.",
  },
};


export const socialLinks: SocialLink[] = [
  { platform: "GitHub", url: "https://github.com/kayshislovee", icon: "github" },
  { platform: "LinkedIn", url: "https://www.linkedin.com/in/ilham-offc-75b74541b/", icon: "linkedin" },
  { platform: "Email", url: "mailto:ilham.offc1012@gmail.com", icon: "mail" },
];

export const personalInfo = {
  name: "Ilham Fathurohman",
  role: "Frontend Developer",
  tagline: "Saya suka membuat situs web yang tidak hanya keren dilihat, tapi juga enak dipakai dan cepat diakses",
  about: `Halo! Saya Ilham Fathurohman, seorang Frontend Developer yang bersemangat dalam menciptakan pengalaman web yang menarik dan responsif. Dengan keahlian dalam HTML, CSS, JavaScript, dan React, saya fokus pada pengembangan antarmuka pengguna yang intuitif dan estetis. Saya selalu berusaha untuk mengikuti tren terbaru dalam desain web dan teknologi frontend, serta berkomitmen untuk terus belajar dan meningkatkan keterampilan saya. Mari kita bekerja sama untuk membangun aplikasi web yang luar biasa!`,
  location: "Bali, Indonesia",
  cvUrl: "/cv-kayshii.pdf",
};
