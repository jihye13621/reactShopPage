import { Center, Flex, Spacer } from '@chakra-ui/react';
import PopoverFilter from './PopoverFilter';
import { textUppercase, verticalLine } from '../styles/shop';

function JumbotronHeader() {
	return (
		<Flex my="5">
			<Center fontSize="sm" style={textUppercase}>
				Our Local Products
			</Center>
			<Center fontSize="sm" ml="10">
				<PopoverFilter />
			</Center>

			<Spacer />
			<Center style={verticalLine} fontSize="sm">
				12,342 Products
			</Center>
		</Flex>
	);
}
export default JumbotronHeader;
