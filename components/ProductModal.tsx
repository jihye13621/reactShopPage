import {
	Badge,
	Button,
	ButtonGroup,
	Center,
	Flex,
	Image,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	Text
} from '@chakra-ui/react';
import { btnAddToCardBlue, cardImage, labelPricePeach } from '../styles/shop';
import ProductModalButtons from './ProductModalButtons';

const ProductModal = ({ product, isOpen, onClose }) => {
	return (
		<Modal isOpen={isOpen} onClose={onClose}>
			<ModalOverlay />
			<ModalContent>
				<ModalCloseButton />
				<Center>
					<Image style={cardImage} src={product.image} alt="Product Fake API" />
				</Center>

				<ModalBody>
					<Text fontSize="sm">{product.category}</Text>
					<Text fontSize="l" noOfLines={2} pb="5">
						{product.title}
					</Text>
					<Text>{product.description}</Text>
				</ModalBody>
				<ModalFooter>
					<Flex width="100%">
						<ProductModalButtons productPrice={product.price} productTitle={product.title} />
					</Flex>
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
};
export default ProductModal;
