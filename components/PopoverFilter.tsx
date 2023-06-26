import {
	Button,
	Checkbox,
	Popover,
	PopoverTrigger,
	PopoverContent,
	PopoverBody,
	PopoverArrow,
	Stack
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
const categoryFilters = [ 'All', 'Apparel', 'Cosmetics', 'Electronics', 'Photography', 'Shoes' ];

function PopoverFilter() {
	return (
		<Popover>
			<PopoverTrigger>
				<Button fontWeight="normal" backgroundColor="white">
					Filtered by All &nbsp;
					<ChevronDownIcon />
				</Button>
			</PopoverTrigger>
			<PopoverContent>
				<PopoverArrow />
				<PopoverBody>
					<Stack spacing={5} direction="column">
						{categoryFilters.map((filter) => (
							<Checkbox key={filter} colorScheme="purple" defaultChecked>
								{filter}
							</Checkbox>
						))}
					</Stack>
				</PopoverBody>
			</PopoverContent>
		</Popover>
	);
}

export default PopoverFilter;
