import { PortalData } from "./models";

export const portalMockData: PortalData = {
  status: {
    pt: "Disponível para Projetos",
    en: "Available for Projects",
  },
  hero: {
    tag: {
      pt: "Inicio • Pedro Costa",
      en: "Home • Pedro Costa",
    },
    title: {
      pt: "Olá, eu sou Pedro.",
      en: "Hello, I'm Pedro.",
    },
    description: {
      pt: "Engenheiro de software construindo produtos digitais resilientes & Professor de Jiu-Jitsu ensinando a arte suave da tomada de decisão sob pressão extrema.",
      en: "Software engineer building resilient digital products & Brazilian Jiu-Jitsu coach teaching the gentle art of high-pressure decision making.",
    },
    email: "contact.devph@gmail.com",
    socialLinks: [
      {
        label: "LinkedIn",
        icon: "open_in_new",
        href: "https://www.linkedin.com/in/pedro-costa-developer/",
      },
      {
        label: "GitHub",
        icon: "terminal",
        href: "https://github.com/phmc99",
      },
    ],
  },
  pathSelection: {
    title: {
      pt: "Escolha um caminho",
      en: "Choose a path",
    },
    subtitle: {
      pt: "Dois universos interconectados pela mesma obsessão por precisão e execução.",
      en: "Two interconnected universes driven by the same obsession with precision and execution.",
    },
    devCard: {
      badge: {
        pt: "Tech & Produto",
        en: "Tech & Product",
      },
      title: {
        pt: "Desenvolvimento de Software",
        en: "Software Engineering",
      },
      description: {
        pt: "Sistemas distribuídos, interfaces de alta fidelidade e infraestrutura resiliente. Do design de sistemas à implementação rigorosa em produção.",
        en: "Distributed systems, high-fidelity interfaces, and resilient infrastructure. From system design to rigorous production implementation.",
      },
      tags: ["Fullstack Dev", "Web Dev", "Mobile - Hybrid", "Basic DevOps", "Basic Database", "AI Applications"],
      metaText: {
        pt: "4+ anos de experiência",
        en: "4+ years of experience",
      },
      linkText: {
        pt: "Ver mais",
        en: "See more",
      },
      href: "/developer",
    },
    bjjCard: {
      badge: {
        pt: "Coach",
        en: "Coach",
      },
      title: {
        pt: "Jiu-Jitsu",
        en: "Jiu-Jitsu",
      },
      description: {
        pt: "Biomecânica aplicada, alavancas, leitura de padrão sob exaustão extrema e metodologia estruturada de ensino para crianças, amadores e competidores.",
        en: "Applied biomechanics, leverage, pattern recognition under exhaustion, and structured teaching methodology for all levels.",
      },
      tags: ["Gi & No-Gi", "Judo", " Kids"],
      metaText: {
        pt: "15+ anos de tatame",
        en: "15+ years on the mats",
      },
      linkText: {
        pt: "Explorar Tatame & Aulas",
        en: "Explore Mats & Classes",
      },
      href: "/bjj",
    },
    crossCard: {
      badge: {
        pt: "Abordagem Cruzada",
        en: "Cross Approach",
      },
      subtitle: {
        pt: "Mentoria & Consultoria",
        en: "Mentorship & Advisory",
      },
      title: {
        pt: "Depuração Mental para Equipes de Tecnologia",
        en: "Mental Debugging for Engineering Teams",
      },
      description: {
        pt: "Como a calma mecânica e a tolerância ao estresse do tatame auxiliam programadores seniores e líderes a lidar com incidentes críticos sem burnout.",
        en: "How mechanical calm and stress tolerance from the mat help senior engineers and leaders handle critical incidents without burnout.",
      },
      actionText: {
        pt: "Conhecer Metodologia",
        en: "Explore Methodology",
      },
    },
  },
  dailyLife: {
    title: {
      pt: "O Dia a Dia",
      en: "Daily Life",
    },
    location: {
      pt: "Brasil • 2026",
      en: "Brasil • 2026",
    },
    cards: [
      {
        title: {
          pt: "Sistemas & Arquitetura",
          en: "Systems & Architecture",
        },
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop",
        alt: "Minimalist workspace setup with code syntax on screen",
      },
      {
        title: {
          pt: "Tatame & Disciplina",
          en: "Mats & Discipline",
        },
        image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1000&auto=format&fit=crop",
        alt: "Jiu-Jitsu black belt tied around gi on tatami mats",
      },
    ],
  },
  editorialSummary: {
    title: {
      pt: "Resumo Editorial",
      en: "Editorial Summary",
    },
    tag: {
      pt: "Visão Rápida",
      en: "Quick Overview",
    },
    items: [
      {
        label: {
          pt: "Papel Atual",
          en: "Current Role",
        },
        value: {
          pt: "Design Engineer & Head Instructor BJJ",
          en: "Design Engineer & Head Instructor BJJ",
        },
      },
      {
        label: {
          pt: "Foco Principal",
          en: "Primary Focus",
        },
        value: {
          pt: "Arquitetura de Front/Back & Didática Marcial",
          en: "Full-stack Architecture & Martial Pedagogy",
        },
      },
      {
        label: {
          pt: "Base & Cidade",
          en: "Location",
        },
        value: {
          pt: "Brasil, Brasil (Horário de Brasília)",
          en: "Brasil, Brazil (BRT)",
        },
      },
      {
        label: {
          pt: "Superpoder",
          en: "Superpower",
        },
        value: {
          pt: "Depurar código sob estresse com a calma do tatame",
          en: "Debugging under stress with mat-tested composure",
        },
      },
    ],
    footerText: {
      pt: "Quer saber mais sobre a trajetória de 15 anos conciliando tecnologia de ponta e artes marciais?",
      en: "Want to learn more about a 15-year journey bridging high tech and martial arts?",
    },
    buttonText: {
      pt: "Ler Biografia Completa",
      en: "Read Full Biography",
    },
  },
};

export async function getPortalData(locale?: "pt" | "en"): Promise<PortalData> {
  // Simulates an async API call
  return Promise.resolve(portalMockData);
}
