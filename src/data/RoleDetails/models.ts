import { langStringObject } from "../utils";

export interface RoleDetails {
	id: number;
	roleId: number;
	name: langStringObject;
	description: langStringObject;
	sections: RoleDetailsSection[];
	profilePicture: string;
	photos: string[];
};

export interface RoleDetailsSection {
	id: number;
	roleDetailsId: number;
	name: langStringObject;
	htmlDescription: langStringObject | string;
}

export interface company {
    id: `${string}-${string}-${string}-${string}-${string}`;
    name: string;
		role: langStringObject;
    startDate: Date;
    endDate: Date;
    description: langStringObject;
}