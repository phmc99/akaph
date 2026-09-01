import { RoleDetails, RoleDetailsSection } from "./models";

const lorem = `What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised thanks to these sheets and more recently with desktop publishing software like Aldus PageMaker and Microsoft Word including versions of Lorem Ipsum. Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). Where does it come from? Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since 1966 is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.Where can I get some? There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.`

const profExpPt = `Atuo como Desenvolvedor Full Stack na criação e evolução de aplicações web, produtos SaaS, integrações e sistemas internos. Trabalho próximo às necessidades do negócio, transformando requisitos e problemas reais em soluções de software escaláveis, eficientes e fáceis de manter.

Sou responsável pelo desenvolvimento de funcionalidades de ponta a ponta, desde a definição da solução e implementação do backend e frontend até integrações com serviços externos, bancos de dados, deploy e manutenção das aplicações.

Ao longo da minha experiência, participei do desenvolvimento de sistemas voltados para diferentes necessidades de negócio, buscando sempre equilibrar qualidade técnica, experiência do usuário e objetivos do produto.`

const profExpEn = `I work as a Full Stack Developer, building and improving web applications, SaaS products, integrations, and internal systems. I work closely with business needs, turning real-world problems and requirements into scalable, efficient, and maintainable software solutions.

I am involved in the full development process, from defining solutions and implementing backend and frontend features to integrating external services, working with databases, deploying applications, and maintaining existing systems.

Throughout my experience, I have worked on products designed to solve different business needs, always looking for a balance between technical quality, user experience, and product goals.`

const MOCK_ROLE_DETAILS_SECTION_DEV_1: RoleDetailsSection = {
	id: 1,
	roleDetailsId: 1,
	name: {en: "Professional Experience", pt: "Experiência Profissional"},
	htmlDescription: {en: `<section><p class='text-blue-500'>${profExpEn}</p></section>`, pt: `<section><p class='text-red-500'>${profExpPt}</p></section>`}
}

const MOCK_ROLE_DETAILS_SECTION_DEV_2: RoleDetailsSection = {
	id: 2,
	roleDetailsId: 1,
	name: {en: "Companies", pt: "Empresas"},
	htmlDescription: {en: `<section><p class=''></p></section>`, pt: `<section><p class='text-red-500'>${lorem}</p></section>`}
}

const MOCK_ROLE_DETAILS_DEV: RoleDetails  = {
	id: 1,
	roleId: 1,
	name: {en: "Software Developer", pt: "Desenvolvedor de Software"},
	description: {en: "I am a Software Developer", pt: "Eu sou um desenvolvedor de software"},
	sections: [MOCK_ROLE_DETAILS_SECTION_DEV_1, MOCK_ROLE_DETAILS_SECTION_DEV_2],
	profilePicture: "https://github.com/phmc99.png",
	photos: ["https://github.com/phmc99.png"]
};

export async function getRole(role: string) {
  const mockedRoles = {
    "developer": MOCK_ROLE_DETAILS_DEV
  };

  if (!(role in mockedRoles)) {
    return null
  }

  type ValidRole = keyof typeof mockedRoles;

  return mockedRoles[role as ValidRole]
}