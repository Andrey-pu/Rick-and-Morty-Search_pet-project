import React, { FC } from 'react'
import PropTypes from 'prop-types'

import {
	SimpleGrid,
	InputGroup,
	InputLeftElement,
	Input,
	InputRightElement,
	Button,
} from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'

interface SearchItemProps {
	searchChar?: string
	setSearchChar?: (value: string) => void
	handleKey?: any // React.KeyboardEvent<HTMLInputElement>
	addTextSearch?: () => void
}

const SearchItem: FC<SearchItemProps> = ({
	searchChar,
	setSearchChar,
	handleKey,
	addTextSearch,
}) => {
	return (
		<InputGroup>
			<InputLeftElement
				pointerEvents='none'
				children={<SearchIcon color='gray.300' />}
			/>
			<Input
				placeholder='Search'
				size='md'
				width='auto'
				value={searchChar}
				onChange={e => setSearchChar?.(e.target.value)}
				onKeyDown={handleKey}
			/>
			<InputRightElement width='4.5rem'>
				<Button
					h='1.75rem'
					size='sm'
					onClick={() => addTextSearch?.()}
				></Button>
			</InputRightElement>
		</InputGroup>
	)
}

export { SearchItem }
