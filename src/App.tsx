import { ChakraProvider,theme } from '@chakra-ui/react'

import { Header } from './layout/Header'
import Main from './layout/Main'

export const App = () => (
	<ChakraProvider theme={theme}>
		<Header />
		<Main />
	</ChakraProvider>
)
