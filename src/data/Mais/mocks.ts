import { MaisData } from "./models";

export const maisMockData: MaisData = {
  roadmapTag: {
    pt: "ROADMAP // EM DESENVOLVIMENTO",
    en: "ROADMAP // IN DEVELOPMENT",
  },
  title: {
    pt: "Outras coisas",
    en: "More features",
  },
  description: {
    pt: "Mais coisas para você mexer nesse site aqui rsrsrs!",
    en: "More cool stuff coming to this site soon!",
  },
  features: [
    {
      id: "profile",
      title: { pt: "Perfil", en: "Profile" },
      description: {
        pt: "Crie seu perfil para ter acesso a novidades e conteúdos especiais.",
        en: "Create your profile to get access to news and exclusive content.",
      },
      status: { pt: "Em desenvolvimento", en: "In development" },
      icon: "account_circle",
      iconBgClass: "bg-surface-container text-primary",
      statusClass: "bg-surface-container text-on-surface-variant",
    },
    {
      id: "gallery",
      title: { pt: "Galeria", en: "Gallery" },
      description: {
        pt: "Para quem quiser ver minhas fotos",
        en: "For anyone who wants to check out my photos",
      },
      status: { pt: "Em desenvolvimento", en: "In development" },
      icon: "photo_library",
      iconBgClass: "bg-secondary-container text-primary",
      statusClass: "bg-surface-container text-on-secondary-container",
      previewImages: [
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=600&auto=format&fit=crop",
      ],
    },
    {
      id: "books",
      title: { pt: "Livros", en: "Books" },
      description: {
        pt: "Recomendação de leituras e livros",
        en: "Book recommendations and reading lists",
      },
      status: { pt: "Em desenvolvimento", en: "In development" },
      icon: "auto_stories",
      iconBgClass: "bg-primary-fixed text-on-primary-fixed-variant",
      statusClass: "bg-primary-fixed text-on-primary-fixed-variant",
    },
    {
      id: "blog",
      title: { pt: "Blog", en: "Blog" },
      description: {
        pt: "Um pouco do que penso e coisas que quero compartilhar em texto com vocês",
        en: "Thoughts, essays, and technical reflections I want to share",
      },
      status: { pt: "Em desenvolvimento", en: "In development" },
      icon: "edit_note",
      iconBgClass: "bg-tertiary-fixed text-on-tertiary-fixed-variant",
      statusClass: "bg-tertiary-fixed text-on-tertiary-fixed-variant",
    },
  ],
  footer: {
    version: {
      pt: "Versão 0.8.4 • Construído para longevidade",
      en: "Version 0.8.4 • Built for longevity",
    },
    subtext: {
      pt: "Disciplina no tatame, precisão no código.",
      en: "Discipline on the mat, precision in the code.",
    },
  },
};

export async function getMaisData(locale?: "pt" | "en"): Promise<MaisData> {
  return Promise.resolve(maisMockData);
}
