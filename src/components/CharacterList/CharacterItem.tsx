import { FC } from 'react'
import { IResults } from '../../models/ICharacter'

import {
	useColorModeValue,
	Flex,
	Badge,
	Box,
	Image,
	Text,
} from '@chakra-ui/react'

interface CharacterItemProps {
	character: IResults
}

const CharacterItem: FC<CharacterItemProps> = ({ character }) => {
	

	return (
		<Flex p={10} justifyContent='center'>
			<Box
				maxW={300}
				bg={useColorModeValue('white', 'gray.800')}
				borderWidth='1px'
				rounded='lg'
				shadow='2xl'
				position='relative'
				overflow='hidden'
			>
				<Image
					src={character.image}
					alt={`Picture of ${character.name}`}
					roundedTop='lg'
				/>

				<Box p='6'>
					<Box d='flex' alignItems='baseline'>
						<Badge
							rounded='full'
							px='2'
							fontSize='0.8em'
							colorScheme={
								character.status === 'Dead'
									? 'red'
									: character.status === 'Alive'
									? 'green'
									: 'gray'
							}
						>
							{character.status}
						</Badge>
					</Box>

					<Text
						color='gray.500'
						letterSpacing='wide'
						fontSize='xl'
						fontWeight='semibold'
						as='h4'
						lineHeight='tight'

						// isTruncated
					>
						{character.name}
					</Text>
				</Box>
			</Box>
		</Flex>

		// <div className='card movie'>
		// 	<div className='card-image waves-effect waves-block waves-light'>
		// 		<img className='activator' src={character.image} />
		// 	</div>
		// 	<div className='card-content'>
		// 		<span className='card-title activator grey-text text-darken-4'>
		// 			{character.name}
		// 		</span>
		// 		{/* <p>
		// 			{} <span className='right'>{character.}</span>
		// 		</p> */}
		// 		<p>{character.status}</p>
		// 	</div>
		// </div>
	)
}
export { CharacterItem }
