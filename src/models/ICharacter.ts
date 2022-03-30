export interface IInfo {
	pages: number
}

export interface IResults {
	id?: number
	name?: string
	status?: string
	species?: string
	gender?: string
	image?: string
}

export interface ICharacter {
	results?: IResults | []
	info?: IInfo //Array
}



