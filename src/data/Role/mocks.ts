import { role, roles } from "./models";

const MOCK_ROLE_DEV: role = {
	id: 1,
	name: {en: "Software Developer", pt: "Desenvolvedor de Software"},
	description: {en: "...", pt: "..."},
	pathname: "developer"
}

const MOCK_ROLE_BJJ: role = {
	id: 2,
	name: {en: "Brazilian Jiu-jitsu Coach", pt: "Professor de Jiu-jitsu"},
	description: {en: "...", pt: "..."},
	pathname: "bjj"
}

export const MOCK_ROLE_LIST: roles = [MOCK_ROLE_DEV, MOCK_ROLE_BJJ]