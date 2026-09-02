import { langStringObject } from "../utils"

export interface Role {
	id: number;
	name: langStringObject;
	description: langStringObject;
	pathname: string;
	disabled?: boolean
};

export type Roles = Role[];