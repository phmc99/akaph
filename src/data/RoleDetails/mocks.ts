import { RoleDetails, RoleDetailsSection } from "./models";


const MOCK_ROLE_DETAILS_SECTION: RoleDetailsSection = {
	id: 1,
	roleDetailsId: 1,
	name: {en: "Professional Experience", pt: "Experiencia Profissional"},
	htmlDescription: {en: "<section><h1 class='text-blue-500'>Description in english</h1></section>", pt: "<section><h1 class='text-red-500'>Descrição em português</h1></section>"}
}

const MOCK_ROLE_DETAILS_DEV: RoleDetails  = {
	id: 1,
	roleId: 1,
	name: {en: "Software Developer", pt: "Desenvolvedor de Software"},
	description: {en: "I am a Software Developer", pt: "Eu sou um desenvolvedor de software"},
	sections: [MOCK_ROLE_DETAILS_SECTION],
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