import {
	ICustomSubscriptionCreate,
	ISubscription
} from '@/shared/types/subscription.interface'
import { request } from '@/services/api/request.api'
import { getActorsUrl, getGenresUrl, getSubscribesUrl } from '@/configs/api.config'
import { IActor, IGenre } from '@/shared/types/movie.types'


export const SubscriptionService = {
	async getAll() {
		return request<ISubscription[]>({
			url: getSubscribesUrl(''),
			method: 'GET'
		})
	},

	async getById(subscribeId: string) {
		return request<ISubscription>({
			url: getSubscribesUrl(`/${subscribeId}`),
			method: 'GET'
		})
	},

	async createSubscription(data: ISubscription) {
		return request<ISubscription>({
			url: getSubscribesUrl(''),
			method: 'POST',
			data
		})
	},

	async createCustomSubscription(data: ICustomSubscriptionCreate) {
		return request<ISubscription>({
			url: getSubscribesUrl('/custom'),
			method: 'POST',
			data
		})
	},

	async buySubscription(subscribeId: string) {
		return request({
			url: getSubscribesUrl(`/buy/${subscribeId}`),
			method: 'POST'
		})
	},

	async checkSubscription(userId: string) {
		return request<boolean>({
			url: getSubscribesUrl(`/check/${userId}`),
			method: 'GET'
		})
	},

	async getAllGenres() {
		return request<IGenre[]>({
			url: getGenresUrl(''),
			method: 'GET'
		})
	},

	async getAllActors() {
		return request<IActor[]>({
			url: getActorsUrl(''),
			method: 'GET'
		})
	}
}
