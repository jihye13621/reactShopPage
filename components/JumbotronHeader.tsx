import { Box, Center, Flex, Link, Spacer, Text } from '@chakra-ui/react';
import { jumbotronStyle, textUppercase } from '../styles/shop';

function JumbotronHeader() {
	return (
		<Box style={jumbotronStyle} bg="tomato" w="100%" h="300px">
			<Flex>
				<Text pl="5" color="white" fontSize="xl" style={textUppercase}>
					Local
				</Text>
				<Spacer />
				<Text color="white">🛒 Your cart is empty&nbsp; | </Text> &nbsp;
				<Link pr="5" color="teal.500" href="/login">
					😃 Login
				</Link>
			</Flex>
			<Center h="200px">
				<Text p={4} color="white" fontSize="2xl">
					This is a local shop<br />
					<Text as="span" ml="10" pl="10">
						for local people
					</Text>
				</Text>
			</Center>
		</Box>
	);
}
export default JumbotronHeader;
