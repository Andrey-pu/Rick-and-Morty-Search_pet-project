import React, { useState } from 'react'
import { useAppDispatch} from '../../hooks/redux'
import { addToInputSearch } from '../../store/reducers/CharacterSlice'
import { SearchItem } from './SearchItem'
import { resetPage } from '../../store/reducers/CharacterSlice'
const Search = () => {
	const [searchChar, setSearchChar] = useState('')
	

	const dispatch = useAppDispatch()

	const addTextSearch = () => {
		dispatch(addToInputSearch(searchChar))
		dispatch(resetPage())
	}
	const handleKey = (event: React.KeyboardEvent<HTMLInputElement>) => {
		if (event.key === 'Enter') {
			addTextSearch()
		}
	}

	return (
		<SearchItem
			searchChar={searchChar}
			setSearchChar={setSearchChar}
			handleKey={handleKey}
			addTextSearch={addTextSearch}
		/>
	)
}

export { Search }
