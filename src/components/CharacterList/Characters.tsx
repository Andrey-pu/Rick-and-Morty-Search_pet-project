import React, { useEffect, useState } from 'react'
import { CharacterItem } from './CharacterItem'
import { IResults } from '../../models/ICharacter'
import { SimpleGrid } from '@chakra-ui/react'
import { useFetchCharactersQuery } from '../../services/CharactersService'
import { useAppSelector} from '../../hooks/redux'


const Characters = () => {
	const [textSearch, setTextSearch] = useState('')
	const searchChar = useAppSelector(state => state.chasracterReducer.inputSearh)
	const pageNumber = useAppSelector(state => state.chasracterReducer.pageNumber)
	const status = useAppSelector(state => state.chasracterReducer.status)

	
	

	useEffect(() => {
		setTextSearch(searchChar)
	}, [searchChar])

	const {
		data: characters,
		error,
		isLoading,
	} = useFetchCharactersQuery({
		name: textSearch,
		page: pageNumber,
		status: status,
	})
	
	
	
	return (
		<>
			<SimpleGrid columns={4} spacing={10}>
				{isLoading && <h1>Идет загрузка</h1>}
				{error && <h1>Еррор</h1>}
				{characters?.results?.map((char: IResults) => (
					<CharacterItem key={char.id} character={char} />
				))}
			</SimpleGrid>
		</>
	)
}
export { Characters }
