import { Box } from '@chakra-ui/react'
import { Characters } from '../components/CharacterList/Characters'
import { Pagination } from '../components/Pagination/Pagination'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { prevPage, nextPage } from '../store/reducers/CharacterSlice'
import { FilterItem } from '../components/Filters/FilterItem'

// import { Character } from '../components/Cards/Character'
// import { Cards } from '../components/Cards/Cards'

export default function Main() {
	const pageNumber = useAppSelector(state => state.chasracterReducer.pageNumber)
	const dispatch = useAppDispatch()

	const prev = () => dispatch(prevPage(pageNumber))
	const next = () => dispatch(nextPage(pageNumber))

	return (
		<>
			<Box p='10'>
				<FilterItem />
			</Box>
			<Pagination pageNumber={pageNumber} prev={prev} next={next}></Pagination>
			<Characters />
		</>
	)
}
