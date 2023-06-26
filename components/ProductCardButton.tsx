import { Button, ButtonGroup, useDisclosure, useToast } from '@chakra-ui/react';
import { btnAddToCardBlue } from '../styles/shop';

const ProductCardButton = ({ productTitle }) => {
	const { onClose } = useDisclosure();
	const toast = useToast();
	return (
		<ButtonGroup spacing="2" mt="2" w="100%">
			<Button
				variant="solid"
				w="100%"
				style={btnAddToCardBlue}
				colorScheme="blue"
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
					onClose();
				}}
			>
				Add to cart
			</Button>
		</ButtonGroup>
	);
};

export default ProductCardButton;
