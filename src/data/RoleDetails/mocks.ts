import { company, RoleDetails, RoleDetailsSection } from "./models";
import { companies } from "./sections/dev-companies";
import { makeAboutSection } from "./sections/dev-about";

function makeCompaniesSection(comps: company[], locale: "pt" | "en"): RoleDetailsSection {
  let items = ""

  comps.forEach((company) => {
    items += `
      <li key="${company.id}">
        <h3 class="font-semibold">${company.name}</h3>
        <h4>${company.role[locale]}</h4>
        <span class="italic text-zinc-500">${company.startDate.toLocaleDateString()} - ${company.endDate.toLocaleDateString()}</span>
        <p class="mt-2 text-mauve-300">${company.description[locale]}</p>
      </li>
    `
  })

  const htmlDescription = `<section><ul class="flex flex-col gap-6">${items}</ul></section>`

  return {
    id: 2,
    roleDetailsId: 1,
    name: {en: "Companies", pt: "Empresas"},
    htmlDescription
  }
}

function developerRoleDetails(locale: "pt" | "en"): RoleDetails {
	return {
		id: 1,
		roleId: 1,
		name: {en: "Software Developer", pt: "Desenvolvedor de Software"},
		description: {en: "I am a Software Developer", pt: "Eu sou um desenvolvedor de software"},
		sections: [makeAboutSection(locale), makeCompaniesSection(companies, locale)],
		profilePicture: "https://github.com/phmc99.png",
		photos: ["https://github.com/phmc99.png"]
	}
}

export async function getRole(role: string, locale: "pt" | "en") {
  const mockedRoles = {
    "developer": developerRoleDetails(locale)
  };

  if (!(role in mockedRoles)) {
    return null
  }

  type ValidRole = keyof typeof mockedRoles;

  return mockedRoles[role as ValidRole]
}