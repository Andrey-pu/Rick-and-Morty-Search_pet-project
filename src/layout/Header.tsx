import { Box, Flex, Image, useColorModeValue, HStack } from '@chakra-ui/react'

import { ColorModeSwitcher } from '../components/ColorModeSwitcher'
import { Search } from '../components/Search/Search'
import Logo from './L.svg'

// const Links = ['characters', 'Episode', 'Location']

// const NavLink = ({ children }: { children: React.ReactNode }) => ( //! add pages: characters, Episode, Location
// 	<Link
// 		px={2}
// 		py={1}
// 		rounded={'md'}
// 		_hover={{
// 			textDecoration: 'none',
// 			bg: useColorModeValue('gray.200', 'gray.700'),
// 		}}
// 		href={'#'}
// 	>
// 		{children}
// 	</Link>
// )

const Header = () => {
	// const { colorMode } = useColorMode()
	// const { isOpen, onOpen, onClose } = useDisclosure()

	return (
		<>
			<Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
				<Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
					<HStack spacing={8} alignItems={'center'}>
						<Image src={Logo} alt='1' boxSize='200px' />
						{/* <HStack
							as={'nav'}
							spacing={4}
							display={{ base: 'none', md: 'flex' }}
						>
							{Links.map(link => (
								<NavLink key={link}>{link}</NavLink> 
							))}
						</HStack> */}
					</HStack>
					<Flex alignItems={'center'}>
						<Box>
							<Search />
						</Box>

						<ColorModeSwitcher />
					</Flex>
				</Flex>
			</Box>
		</>
	)
}
export { Header }
