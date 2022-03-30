import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export interface ISearch {
	character: string
	results: []
}

export const characterAPI = createApi({
	reducerPath: 'characterAPI',
	tagTypes: ['character'],
	baseQuery: fetchBaseQuery({ baseUrl: 'https://rickandmortyapi.com/api' }),
	endpoints: builder => ({
		fetchCharacters: builder.query({
			query: arg => {
				const { name, page, status } = arg

				return {
					url: `/character`,
					params: {
						name: name,
						page: page,
						status: status,
					},
				}
			},
			providesTags: ['character'],
		}),
	}),
})

export const { useFetchCharactersQuery, useLazyFetchCharactersQuery } =
	characterAPI
