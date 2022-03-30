import React from 'react'
import {
	FormControl,
	FormLabel,
	RadioGroup,
	HStack,
	Radio,
	Button,
} from '@chakra-ui/react'
import { useAppDispatch } from '../../hooks/redux'
import { setStatus, resetStatus } from '../../store/reducers/CharacterSlice'

const FilterItem = () => {
	const dispatch = useAppDispatch()

	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		dispatch(setStatus(e.target.value))
	}

	const clickReset = () => {
		dispatch(resetStatus())
	}
	return (
		<>
			<FormControl
				as='fieldset'
				borderWidth='2px'
				rounded='lg'
				shadow='lg'
				p='5'
				width='30%'
			>
				<FormLabel as='legend'>Status</FormLabel>
				<RadioGroup defaultValue='Clear'>
					<HStack spacing='24px' onChange={onChange}>
						<Radio value='Alive'>Alive</Radio>
						<Radio value='Dead'>Dead</Radio>
						<Radio value='Unknown'>Unknown</Radio>
						<Button onClick={clickReset}>Reset</Button>
					</HStack>
				</RadioGroup>
			</FormControl>
		</>
	)
}

export { FilterItem }
