import { LinksData } from "./models";

export const linksMockData: LinksData = {
  status: {
    pt: "Disponível para Q2/2026",
    en: "Available for Q2/2026",
  },
  hero: {
    name: "Pedro Costa",
    verifiedText: {
      pt: "Verificado",
      en: "Verified",
    },
    bio: {
      pt: "Engenharia de software distribuída & Arte suave marcial. Links rápidos, projetos, aulas e contato direto.",
      en: "Distributed software engineering & Martial arts. Quick links, projects, coaching, and direct contact.",
    },
    email: "contato@PedroCosta.dev",
    socials: [
      { label: "GitHub", icon: "code", href: "https://github.com" },
      { label: "X / Twitter", icon: "tag", href: "https://x.com" },
      { label: "LinkedIn", icon: "badge", href: "https://linkedin.com" },
      { label: "Instagram", icon: "photo_camera", href: "https://instagram.com" },
    ],
  },
  sections: [
    {
      title: {
        pt: "Tech & Arquitetura",
        en: "Tech & Architecture",
      },
      links: [
        {
          id: "dev-bio",
          title: { pt: "Portfólio Editorial & Biografia", en: "Editorial Portfolio & Biography" },
          subtitle: { pt: "Trajetória completa, projetos de alta escala", en: "Full trajectory, high-scale projects" },
          icon: "account_box",
          href: "/developer",
        },
        {
          id: "github-repos",
          title: { pt: "Repositórios & Open Source", en: "Repositories & Open Source" },
          subtitle: { pt: "Sistemas distribuídos, Go, Rust, K8s", en: "Distributed systems, Go, Rust, K8s" },
          icon: "data_object",
          href: "https://github.com",
          isExternal: true,
        },
        {
          id: "tech-articles",
          title: { pt: "Artigos Técnicos & Ensaios", en: "Technical Articles & Essays" },
          subtitle: { pt: "Engenharia de resiliência e latência p99", en: "Resilience engineering & p99 latency" },
          icon: "feed",
          href: "#",
        },
        {
          id: "consulting",
          title: { pt: "Consultoria de Arquitetura", en: "Architecture Consulting" },
          subtitle: { pt: "Auditorias de stack e mentoria sênior", en: "Stack audits & senior advisory" },
          icon: "calendar_month",
          href: "#",
          isHighlighted: true,
        },
      ],
    },
    {
      title: {
        pt: "Jiu-Jitsu & Tatame",
        en: "Jiu-Jitsu & Mat",
      },
      links: [
        {
          id: "bjj-bio",
          title: { pt: "Aula Particular ou Seminário", en: "Private Coaching or Workshop" },
          subtitle: { pt: "Metodologia biomecânica e alavancas", en: "Applied biomechanics and leverage" },
          icon: "sports_martial_arts",
          href: "/bjj",
        },
        {
          id: "bjj-schedule",
          title: { pt: "Grade de Aulas & CT no Rio", en: "Class Schedule & Rio Academy" },
          subtitle: { pt: "Horários de treinos para amadores e atletas", en: "Training hours for all levels" },
          icon: "schedule",
          href: "#",
        },
        {
          id: "bjj-youtube",
          title: { pt: "Canal YouTube / Análises", en: "YouTube Channel / Breakdown" },
          subtitle: { pt: "Passagem de guarda moderna, retenção e pegadas", en: "Modern guard pass, retention & grips" },
          icon: "smart_display",
          href: "https://youtube.com",
          isExternal: true,
          isFullWidth: true,
        },
      ],
    },
    {
      title: {
        pt: "Extras & Recursos",
        en: "Extras & Resources",
      },
      links: [
        {
          id: "gallery-link",
          title: { pt: "Galeria Exclusiva de Bastidores", en: "Behind-the-Scenes Gallery" },
          subtitle: { pt: "Fotografias de war room, deploys e pódios", en: "War room, deploys & podium photos" },
          icon: "photo_library",
          href: "/mais",
        },
        {
          id: "books-link",
          title: { pt: "Lista de Livros Recomendados", en: "Recommended Reading List" },
          subtitle: { pt: "Design de sistemas, estoicismo e preparação", en: "System design, stoicism & mindset" },
          icon: "menu_book",
          href: "/mais",
        },
        {
          id: "newsletter-link",
          title: { pt: "Newsletter 'O Algoritmo & O Tatame'", en: "'Algorithm & Mat' Newsletter" },
          subtitle: { pt: "Reflexões quinzenais sobre código sob pressão e foco", en: "Bi-weekly essays on code & pressure" },
          icon: "mark_email_unread",
          href: "#",
          isFullWidth: true,
        },
      ],
    },
  ],
  directContact: {
    title: {
      pt: "Contato Direto",
      en: "Direct Contact",
    },
    options: [
      { label: "WhatsApp", icon: "chat", href: "https://wa.me/", colorClass: "text-emerald-600" },
      { label: "Telegram", icon: "send", href: "https://t.me/", colorClass: "text-sky-500" },
    ],
    email: "contato@PedroCosta.dev",
  },
  footer: {
    locationText: {
      pt: "Pedro Costa • Brasil, BR",
      en: "Pedro Costa • Brasil, BR",
    },
    versionText: "Versão 2.4 — 2026",
  },
};

export async function getLinksData(locale?: "pt" | "en"): Promise<LinksData> {
  return Promise.resolve(linksMockData);
}
