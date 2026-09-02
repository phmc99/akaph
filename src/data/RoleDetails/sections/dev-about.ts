import { RoleDetailsSection } from "../models"

const profExpPt = `
  - 5 anos de Experiência profissional;<br>
  - ERPs, Mobile, REST APIs, E-commerce e gestão de time e ensino;<br>
  - Linguagens de Programação: JavaScript | TypeScript | C# | Python;<br>
  - Front-end: React, React Native, Next, CSS, Tailwind e libs de componente;<br>
  - Back-end: Node.js (Express, Fastify), .NET, FastAPI, Prisma, Entity Framework, SQLAlchemy;<br>
  - Outras ferramentas: SQL | MongoDB | Docker | AWS | Git. 
`

const profExpEn = `
  - 5 years of professional experience;<br>
  - ERP systems, Mobile, REST APIs, E-commerce, team management, and teaching;<br>
  - Programming Languages: JavaScript | TypeScript | C# | Python;<br>
  - Front-end: React, React Native, Next.js, CSS, Tailwind CSS, and component libraries;<br>
  - Back-end: Node.js (Express, Fastify), .NET, FastAPI, Prisma, Entity Framework, SQLAlchemy;<br>
  - Other tools: SQL | MongoDB | Docker | AWS | Git.
`

export function makeAboutSection(locale: "pt" | "en"): RoleDetailsSection {
  return {
    id: 1,
    roleDetailsId: 1,
    name: {en: "About me", pt: "Sobre mim"},
    htmlDescription: {en: `<section><p class='text-mauve-300'>${profExpEn}</p></section>`, pt: `<section><p class='text-mauve-300 text-justify'>${profExpPt}</p></section>`}
  }
}