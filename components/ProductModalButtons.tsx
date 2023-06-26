import { Badge, Button, ButtonGroup, useToast } from '@chakra-ui/react';
import { btnAddToCardBlue, labelPricePeach } from '../styles/shop';

const ProductModalButtons = ({ productPrice, productTitle }) => {
	const toast = useToast();
	return (
		<ButtonGroup width="100%">
			<Badge style={labelPricePeach} p="1" borderRadius="5px" fontSize="lg">
				${productPrice}
			</Badge>
			<Button
				width="inherit"
				style={btnAddToCardBlue}
				colorScheme="blue"
				mr={3}
				sx={{
					transition: 'all .2s ease-in-out',
					'&:hover': {
						background: 'rgb(7 53 142) !important',
						boxShadow: '1px 2px 4px 0px rgba(176,164,176,1)'
					}
				}}
				onClick={() => {
					toast({
						title: 'Added to Cart',
						description: productTitle + ' Added to Cart',
						position: 'top-right',
						status: 'success',
						duration: 2000,
						isClosable: true
					});
				}}
			>
				Add to cart
			</Button>
		</ButtonGroup>
	);
};
export default ProductModalButtons;
