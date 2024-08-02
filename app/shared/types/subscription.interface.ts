export interface ISubscription {
	_id: string
	name: string
	description: string
	price: number
	duration: number
	genres: string[]
	actors: string[]
}

export interface ICustomSubscriptionCreate {
	genres: string[]
	actors?: string[]
	userId: string
}
