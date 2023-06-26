import {
	Badge,
	Box,
	Center,
	Flex,
	Image,
	Spacer,
	Stack,
	useDisclosure,
  Text
} from '@chakra-ui/react';
import { cardBodyStyle, cardImage, cardStyle,labelPricePeach } from '../styles/shop';
import ProductModal from './ProductModal';
import ProductCardButton from './ProductCardButton';

const ProductCard = ({ product }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
	return (
  <>
		<Box key={product.id} style={cardStyle}>
			<Box
				sx={{
					transition: 'all .2s ease-in-out',
					'&:hover': {
						boxShadow: '4px 6px 5px 0px rgba(176,164,176,1)'
					}
				}}
			>
				<Center
					sx={{
						'&:hover': {
							cursor: 'pointer'
						}
					}}
				>
					<Image onClick={onOpen} style={cardImage} src={product.image} alt="Product Fake API" />
				</Center>
				<Box style={cardBodyStyle}>
					<Stack spacing="3">
						<Flex>
							<Text fontSize="sm">{product.category}</Text>
							<Spacer />
							<Badge style={labelPricePeach} p="1" borderRadius="5px" pos="absolute" fontSize="lg">
								${product.price}
							</Badge>
						</Flex>
						<Text fontSize="xl" noOfLines={2}>
							{product.title}
						</Text>
					</Stack>
					<ProductCardButton productTitle={product.title}/>
				</Box>
			</Box>
		</Box>
    <ProductModal product={product} isOpen={isOpen} onClose={onClose}/>
    </>
	);
};
export default ProductCard;
