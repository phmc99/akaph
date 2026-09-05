import { RoleDetails } from "./models";

export const devRoleMock: RoleDetails = {
  id: "developer",
  role: "developer",
  name: {
    pt: "Desenvolvedor & Arquiteto",
    en: "Developer & Architect",
  },
  description: {
    pt: "Construindo sistemas distribuídos de alta escala",
    en: "Building high-scale distributed systems",
  },
  availability: {
    pt: "Disponível para Q2/2026 // Consultoria & Staff Roles",
    en: "Available for Q2/2026 // Advisory & Staff Roles",
  },
  title: {
    pt: "Seja bem-vindo(a)! Aqui você pode ver um pouco mais sobre quem eu sou e o que eu faço.",
    en: "Welcome! Here you can see a bit more about who I am and what I do.",
  },
  bio: {
    pt: "Meu foco na área tech foi sempre resolver problemas. Em 5 anos de experiência já trabalhei com start-ups, sistema legado, mobile e EdTech. Meu atual objetivo é resolver problemas maiores e ter mais experiencia com gestão de projetos e times.",
    en: "My focus in the tech area was always on solving problems. In 5 years of experience I've worked with start-ups, legacy systems, mobile and EdTech. My current goal is to solve bigger problems and gain more experience in project and team management.",
  },
  avatar: {
    name: "Pedro Costa",
    title: {
      pt: "Desenvolvedor Fullstack",
      en: "Fullstack Software Engineer",
    },
    quote: {
      pt: '"Simplicidade radical na arquitetura, limites de domínio desacoplados e tolerância a falhas sob alto tráfego."',
      en: '"Radical simplicity in architecture, decoupled domain boundaries, and fault tolerance under heavy traffic."',
    },
    icon: "code",
  },
  specs: [
    {
      label: { pt: "Papel", en: "Role" },
      value: { pt: "Staff Software Engineer & Solutions Architect", en: "Staff Software Engineer & Solutions Architect" },
    },
    {
      label: { pt: "Foco", en: "Focus" },
      value: { pt: "REST APIs, Web Apps, Mobile Apps, Sites e Landing Pages", en: "REST APIs, Web Apps, Mobile Apps, Sites & Landing Pages" },
    },
    {
      label: { pt: "Experiência", en: "Experience" },
      value: { pt: "4+ anos resolvendo problemas de tecnologia.", en: "4+ years solving tech problems." },
    },
    {
      label: { pt: "Habilidades", en: "Skills" },
      value: { pt: "Além da parte técnica, gosto de trabalhar de forma organizada, proativa e com clareza na comunicação.", en: "Debugging bottlenecks under high pressure with analytical clarity and systemic vision." },
    },
    {
      label: { pt: "Localização", en: "Location" },
      value: { pt: "Brasil (Remoto Global)", en: "Brazil (Global Remote)" },
      icon: "location_on",
    },
    {
      label: { pt: "Status", en: "Status" },
      value: { pt: "Disponível para projetos full-time e freelancers", en: "Available for full-time and freelance projects" },
    },
    {
      label: { pt: "Stack Principal", en: "Main Stack" },
      value: { pt: "", en: "" },
      isStack: true,
      tags: ["Go", "Rust", "TypeScript", "Next.js", "Kubernetes", "Kafka", "PostgreSQL", "AWS"],
    },
  ],
  timeline: [
    {
      period: "2026 — Presente",
      title: { pt: "Staff Software Engineer", en: "Staff Software Engineer" },
      subtitle: { pt: "Fintech Core Platform & Distributed Systems", en: "Fintech Core Platform & Distributed Systems" },
      description: {
        pt: "Liderança técnica de infraestrutura crítica de mensageria, governança de arquitetura distribuída e mentoria de engenheiros seniores.",
        en: "Technical leadership of critical messaging infrastructure, distributed architecture governance, and senior engineer mentorship.",
      },
      isCurrent: true,
    },
    {
      period: "2024 — 2025",
      title: { pt: "Senior Backend Architect", en: "Senior Backend Architect" },
      subtitle: { pt: "Global Cloud E-Commerce", en: "Global Cloud E-Commerce" },
      description: {
        pt: "Desenho de microsserviços em Go e pipelines assíncronos que sustentaram mais de 120k requisições/min durante a Black Friday sem degradação de p99.",
        en: "Designed Go microservices and async pipelines handling over 120k req/min during Black Friday without p99 degradation.",
      },
    },
    {
      period: "2022 — 2024",
      title: { pt: "Lead Frontend Engineer", en: "Lead Frontend Engineer" },
      subtitle: { pt: "Design Systems & Web Applications", en: "Design Systems & Web Applications" },
      description: {
        pt: "Criação de ecossistema de componentes unificados para 4 produtos SaaS em escala, reduzindo o tempo de entrega de features em 40%.",
        en: "Built a unified component ecosystem across 4 SaaS products at scale, cutting feature delivery time by 40%.",
      },
    },
    {
      period: "2019 — 2022",
      title: { pt: "Senior Software Engineer", en: "Senior Software Engineer" },
      subtitle: { pt: "High-Scale APIs & Event Streams", en: "High-Scale APIs & Event Streams" },
      description: {
        pt: "Implementação de topologias Kafka para processamento de transações em tempo real e migração de monolito para microsserviços.",
        en: "Implemented Kafka topologies for real-time transaction processing and led monolith to microservices migration.",
      },
    },
    {
      period: "2017 — 2019",
      title: { pt: "Full Stack Engineer", en: "Full Stack Engineer" },
      subtitle: { pt: "Product Studio & Startups", en: "Product Studio & Startups" },
      description: {
        pt: "Desenvolvimento end-to-end de MVPs e aplicações web de alta tração com React, Node e PostgreSQL.",
        en: "End-to-end development of high-traction web applications and MVPs with React, Node, and PostgreSQL.",
      },
    },
    {
      period: "2016",
      title: { pt: "Bacharelado em Ciência da Computação", en: "B.S. in Computer Science" },
      subtitle: { pt: "Universidade Federal do Brasil (UFRJ)", en: "Federal University of Brasil (UFRJ)" },
      description: { pt: "Formação acadêmica sólida com foco em algoritmos, grafos e sistemas operacionais.", en: "Solid academic background with focus on algorithms, graphs, and operating systems." },
    },
  ],
  projects: [
    {
      title: "KubeMat-Orchestrator",
      description: {
        pt: "Controlador K8s com telemetria preditiva de tráfego, auto-scaling dinâmico e auto-healing preventivo.",
        en: "K8s controller with predictive traffic telemetry, dynamic auto-scaling, and preventive self-healing.",
      },
      tags: ["Go", "Kubernetes", "Open Source"],
    },
    {
      title: "Fintech Core Gateway",
      description: {
        pt: "Modernização de pipeline de pagamentos de alta vazão com consistência eventual idempotente e p99 de 32ms sob 40k req/s.",
        en: "Modernization of high-throughput payment pipeline with idempotent eventual consistency and 32ms p99 at 40k req/s.",
      },
      tags: ["Distributed Systems", "PostgreSQL", "Kafka"],
    },
    {
      title: "Event-Stream Mesh",
      description: {
        pt: "Framework de mensageria assíncrona resiliente com semântica de entrega exactly-once e tolerância a partições de rede.",
        en: "Resilient async messaging framework with exactly-once delivery semantics and network partition tolerance.",
      },
      tags: ["Rust", "gRPC", "Raft Consensus"],
    },
    {
      title: "Edge Cache Accelerator",
      description: {
        pt: "Reverse proxy com WebAssembly e invalidação sub-milissegundo para distribuição de APIs globais.",
        en: "Wasm reverse proxy with sub-millisecond invalidation for global API distribution.",
      },
      tags: ["WebAssembly", "Cloudflare Workers", "TypeScript"],
    },
  ],
  sideProjects: [
    {
      title: "Bento Dev Profile",
      domain: "bentodev.app",
      description: {
        pt: "Hub de links e portfólio ultra-customizável estilo bento grid para engenheiros de software.",
        en: "Ultra-customizable bento grid portfolio & link hub for software engineers.",
      },
      link: "https://github.com",
    },
    {
      title: "Algoritmo & Código Digest",
      domain: "substack.com",
      description: {
        pt: "Newsletter técnica sobre modelos mentais de sistemas complexos e engenharia de software sustentável.",
        en: "Technical newsletter on mental models for complex systems and sustainable software engineering.",
      },
      link: "https://substack.com",
    },
    {
      title: "Rust Query Builder",
      domain: "crates.io",
      description: {
        pt: "Construção de queries SQL seguras em tempo de compilação com zero runtime allocations.",
        en: "Compile-time safe SQL query builder with zero runtime allocations in Rust.",
      },
      link: "https://crates.io",
    },
  ],
  exploringIdeas: [
    {
      text: {
        pt: "Agente autônomo local para auditoria de arquitetura de microsserviços e mapeamento de dependências cíclicas.",
        en: "Autonomous local agent for microservice architecture audit and cycle dependency mapping.",
      },
    },
    {
      text: {
        pt: "Engine leve de benchmark distribuído com relatórios em terminal interativo em Rust.",
        en: "Lightweight distributed benchmark engine with interactive terminal reports in Rust.",
      },
    },
  ],
  footer: {
    quote: {
      pt: "Desenhado com precisão & disciplina. Brasil, Brasil.",
      en: "Designed with precision & discipline. Brasil, Brazil.",
    },
    copyright: "© 2026 Pedro Costa",
    subtitle: {
      pt: "OSS & Open Mats",
      en: "OSS & Open Mats",
    },
  },
};

export const bjjRoleMock: RoleDetails = {
  id: "bjj",
  role: "bjj",
  name: {
    pt: "Faixa-Preta de Jiu-Jitsu",
    en: "Jiu-Jitsu Black Belt",
  },
  description: {
    pt: "Arte suave, alavancas e tomada de decisão sob pressão",
    en: "Gentle art, leverage, and decision making under pressure",
  },
  availability: {
    pt: "Disponível para  & Aulas Particulares Q2/2026",
    en: "Available for Workshops & Private Classes Q2/2026",
  },
  title: {
    pt: "Hey, I'm Pedro. I teach the gentle art of Brazilian Jiu-Jitsu.",
    en: "Hey, I'm Pedro. I teach the gentle art of Brazilian Jiu-Jitsu.",
  },
  bio: {
    pt: "Faixa-preta 1º grau. Dedicado à biomecânica, precisão de alavancas, tomada de decisão sob exaustão extrema e formação de atletas e praticantes.",
    en: "1st degree Black Belt. Dedicated to biomechanics, leverage precision, decision making under extreme exhaustion, and practitioner coaching.",
  },
  avatar: {
    name: "Pedro Costa",
    title: {
      pt: "Faixa-Preta 1º Grau & Head Coach",
      en: "1st Degree Black Belt & Head Coach",
    },
    quote: {
      pt: '"O tatame é o teste definitivo da realidade: sob pressão máxima, a técnica correta e a calma superam qualquer força bruta."',
      en: '"The mat is the ultimate reality test: under maximum pressure, correct technique and composure overcome brute force."',
    },
    icon: "sports_kabaddi",
  },
  specs: [
    {
      label: { pt: "Papel", en: "Role" },
      value: { pt: "Faixa-Preta 1º Grau (CBJJ / IBJJF) & Head Coach", en: "1st Degree Black Belt (CBJJ / IBJJF) & Head Coach" },
    },
    {
      label: { pt: "Linhagem & Graduação", en: "Lineage & Rank" },
      value: { pt: "Formado na tradição clássica do Jiu-Jitsu Brasileiro, 14 anos de vivência ininterrupta no tatame.", en: "Trained in classical BJJ tradition, 14 years of uninterrupted mat experience." },
    },
    {
      label: { pt: "Metodologia", en: "Methodology" },
      value: { pt: "Biomecânica aplicada, estudo analítico de alavancas, leitura de padrões e defesa tática.", en: "Applied biomechanics, analytical leverage study, pattern recognition, and tactical defense." },
    },
    {
      label: { pt: "Especialidades", en: "Specialties" },
      value: { pt: "", en: "" },
      tags: ["Gi & No-Gi", "Guard Retention Moderna", "Passagem de Guarda", "Defesa Pessoal"],
    },
    {
      label: { pt: "Superpoder", en: "Superpower" },
      value: { pt: "Traduzir movimentos corporais complexos em princípios simples e reprodutíveis para qualquer tipo físico.", en: "Translating complex body mechanics into simple, reproducible principles for any body type." },
    },
    {
      label: { pt: "Localização & Status", en: "Location & Status" },
      value: { pt: "Brasil &  • Agendando workshops", en: "Brasil & Workshops • Scheduling events" },
      icon: "location_on",
    },
  ],
  timeline: [
    {
      period: "2026 — Presente",
      title: { pt: "Head Coach & Fundador de CT", en: "Head Coach & Academy Founder" },
      subtitle: { pt: "Mentoria de Atletas & Formação de Novos Instrutores", en: "Athlete Coaching & Instructor Training" },
      description: {
        pt: "Liderança técnica de centro de treinamento especializado, refinamento de planos didáticos para competidores e programas de defesa pessoal executiva.",
        en: "Technical leadership of specialized training center, competitor curriculum development, and executive self-defense programs.",
      },
      isCurrent: true,
    },
    {
      period: "2022 — 2025",
      title: { pt: "Faixa-Preta 1º Grau", en: "1st Degree Black Belt" },
      subtitle: { pt: "Opens Regionais & Formação de Faixas Azuis e Roxas", en: "Regional Opens & Blue/Purple Belt Coaching" },
      description: {
        pt: "Conquistas e pódios em campeonatos estaduais, consolidação de metodologia de ensino focada em retenção de guarda e transições sem atrito.",
        en: "State championship podiums and consolidation of teaching methodology focused on guard retention and smooth transitions.",
      },
    },
    {
      period: "2020",
      title: { pt: "Graduação a Faixa Preta", en: "Promoted to Black Belt" },
      subtitle: { pt: "Consagração Técnica CBJJ / IBJJF", en: "CBJJ / IBJJF Technical Certification" },
      description: {
        pt: "Graduação à faixa preta após 10 anos de dedicação diária ininterrupta, sparrings de alto rendimento e consistência marcial.",
        en: "Awarded black belt after 10 years of daily dedication, high-level sparring, and martial consistency.",
      },
    },
    {
      period: "2017 — 2019",
      title: { pt: "Faixa Marrom", en: "Brown Belt" },
      subtitle: { pt: "Circuito Estadual & Brasileiro CBJJ", en: "State & Brazilian CBJJ Circuit" },
      description: {
        pt: "Temporadas ativas no circuito de competição, conquistando pódios no Campeonato Estadual e Brasileiro com foco em finalizações táticas.",
        en: "Active competition seasons with podium finishes in State and National Championships focusing on tactical submissions.",
      },
    },
    {
      period: "2014 — 2016",
      title: { pt: "Faixas Azul & Roxa", en: "Blue & Purple Belt" },
      subtitle: { pt: "Competição & Instrutoria Inicial", en: "Competition & Assistant Coaching" },
      description: {
        pt: "Foco intensivo em sparring, estudo biomecânico de defesas e início da atuação como instrutor assistente para turmas infantis e iniciantes.",
        en: "Intensive sparring, defense biomechanics study, and assistant coaching for kids and beginner classes.",
      },
    },
    {
      period: "2010",
      title: { pt: "Início da Jornada no Tatame", en: "Beginning of Mat Journey" },
      subtitle: { pt: "Primeiros Passos & Fundamentos", en: "First Steps & Fundamentals" },
      description: {
        pt: "Primeiro contato com a arte suave no Brasil, imersão na cultura de disciplina, respeito mútuo e autodomínio.",
        en: "First encounter with the gentle art in Brasil, embracing discipline, mutual respect, and self-mastery.",
      },
    },
  ],
  projects: [
    {
      title: "Tatami-Metrics Engine",
      description: {
        pt: "Sistema de análise de fadiga biomecânica, tempo de pegada e periodização científica para atletas de alto rendimento no combate.",
        en: "Biomechanics fatigue tracking, grip duration analysis, and scientific periodization for high-level combat athletes.",
      },
      tags: ["Biomecânica", "Periodização", "High Performance"],
    },
    {
      title: "Jiu-Jitsu Guard Retention Blueprint",
      description: {
        pt: "Plataforma educacional e guia visual detalhado com diagramas e alavancas para manutenção, recuperação e recomposição inteligente de guarda.",
        en: "Educational platform and visual diagram guide detailing smart guard retention, recovery, and leverage management.",
      },
      tags: ["Didática Visual", "Guard Retention", "Manual Técnico"],
    },
    {
      title: "Metodologia Calma Sob Fogo",
      description: {
        pt: "Workshop prático desenvolvido para tomadores de decisão e executivos: controle de respiração, gestão de pânico e clareza tática sob extrema pressão.",
        en: "Practical workshop built for decision makers and executives: breath control, panic management, and tactical clarity under fire.",
      },
      tags: ["Workshop Executivo", "Mentalidade", "Stress Inoculation"],
    },
    {
      title: "Análises Técnicas em Vídeo",
      description: {
        pt: "Série detalhada em vídeo desconstruindo finalizações lendárias do ADCC e Mundiais IBJJF em câmera lenta com visualização de ângulos e eixos de força.",
        en: "Detailed video breakdown series analyzing legendary ADCC and IBJJF World submissions in slow motion with force vectors.",
      },
      tags: ["ADCC & IBJJF", "Breakdown Tático", "Videoanálise"],
    },
  ],
  sideProjects: [
    {
      title: "RollTimer Pro",
      domain: "rolltimer.cc",
      description: {
        pt: "Cronômetro minimalista para sparrings e rounds de alta intensidade com intervalos configuráveis.",
        en: "Minimalist sparring & round timer with custom high-intensity interval configurations.",
      },
      link: "https://rolltimer.cc",
    },
    {
      title: "Canal de Análises",
      domain: "youtube.com/@tatamiflow",
      description: {
        pt: "Vídeos didáticos curtos dissecando escapes de montada, passagens toureador e distribuição de peso.",
        en: "Short breakdown videos dissecting mount escapes, bull-pass technique, and weight distribution.",
      },
      link: "https://youtube.com",
    },
    {
      title: "Condicionamento BJJ",
      domain: "notion.site/bjj-mobility",
      description: {
        pt: "Guia de mobilidade articular e prevenção de lesões em ombros, coluna lombar e joelhos.",
        en: "Joint mobility and injury prevention guide for shoulders, spine, and knees.",
      },
      link: "https://notion.site",
    },
  ],
  exploringIdeas: [
    {
      text: {
        pt: "Sistema de mapeamento biomecânico 3D para análise de pontos de pegada e tensão de kimono em tempo real via sensores vestíveis.",
        en: "3D biomechanical mapping system for real-time grip pressure and gi tension analysis via wearable sensors.",
      },
    },
    {
      text: {
        pt: "Protocolo de recuperação cognitiva e neuromotora para atletas amadores e profissionais pós-camps competitivos de alto estresse.",
        en: "Cognitive and neuromotor recovery protocol for amateur and professional athletes post-camp.",
      },
    },
  ],
  footer: {
    quote: {
      pt: "Oss. Disciplina, respeito & busca contínua pela maestria técnica.",
      en: "Oss. Discipline, respect & continuous pursuit of technical mastery.",
    },
    copyright: "© 2026 Pedro Costa",
    subtitle: {
      pt: "BJJ Black Belt 1st Degree",
      en: "BJJ Black Belt 1st Degree",
    },
  },
};

export async function getRole(role: string, locale?: "pt" | "en"): Promise<RoleDetails | null> {
  const cleanRole = role.replace(/^\/+|\/+$/g, "");
  if (cleanRole === "developer" || cleanRole === "dev") {
    return Promise.resolve(devRoleMock);
  }
  if (cleanRole === "bjj") {
    return Promise.resolve(bjjRoleMock);
  }
  return Promise.resolve(null);
}

export async function getRoleDetails(role: string, locale?: "pt" | "en"): Promise<RoleDetails | null> {
  return getRole(role, locale);
}