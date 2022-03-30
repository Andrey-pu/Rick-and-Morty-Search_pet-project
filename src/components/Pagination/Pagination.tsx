import React, { FC } from 'react'
import { Button, ButtonGroup } from '@chakra-ui/react'

interface PaginationProps {
	pageNumber: number
	prev: () => void
	next: () => void
}

const Pagination: FC<PaginationProps> = ({ pageNumber, prev, next }) => {
	return (
		<ButtonGroup
			variant='outline'
			spacing='6'
			p='10'
			position='relative'
			left='80%'
		>
			{pageNumber !== 1 ? (
				<Button colorScheme='blue' onClick={prev}>
					Prev
				</Button>
			) : null}

			<Button colorScheme='blue' onClick={next}>
				Next
			</Button>
		</ButtonGroup>
	)
}

export { Pagination }
