import { Role, Roles } from "./models";

const MOCK_ROLE_DEV: Role = {
	id: 1,
	name: {en: "Software Developer", pt: "Desenvolvedor de Software"},
	description: {en: "...", pt: "..."},
	pathname: "developer"
};

const MOCK_ROLE_BJJ: Role = {
	id: 2,
	name: {en: "Brazilian Jiu-jitsu Coach", pt: "Professor de Jiu-jitsu"},
	description: {en: "...", pt: "..."},
	pathname: "bjj",
	disabled: true
};

export const MOCK_ROLE_LIST: Roles = [MOCK_ROLE_DEV, MOCK_ROLE_BJJ];