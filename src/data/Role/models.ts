import { langStringObject } from "../utils"

export interface role {
	id: number
	name: langStringObject,
	description: langStringObject,
	pathname: string
}

export type roles = role[]