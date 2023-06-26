import { Box, Grid } from '@chakra-ui/react';
import { SlideFade } from '@chakra-ui/transition';
import { useEffect, useState } from 'react';

import JumbotronHeader from '../components/JumbotronHeader';
import ProductResultsHeader from '../components/ProductResultsHeader';
import ProductCard from '../components/ProductCard';
import SkeletonLoading from '../components/SkeletonLoading';

function ProfileView() {
	const [ isLoading, setLoading ] = useState(true);
	setTimeout(() => {
		setLoading(false);
	}, 1500);

	const [ shopData, setShopData ] = useState(null);

	useEffect(() => {
		fetch('https://fakestoreapi.com/products/').then((res) => res.json()).then((data) => setShopData(data));
		console.count('hi');
	}, []);
	console.log('shopData: ', shopData);

	if (isLoading) {
		return (
			<Box p="10">
				<SkeletonLoading />
			</Box>
		);
	}

	return (
		<Box p="10">
			<SlideFade in={!isLoading} offsetY="-20px">
				<JumbotronHeader />
				<ProductResultsHeader />
				<hr />
				<Box pt="8">
					{shopData &&
					shopData.length > 0 && (
						<Grid
							templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(3,1fr)', lg: 'repeat(5, 1fr)' }}
							gap={6}
						>
							{shopData.map((product, x) => <ProductCard key={x} product={product} />)}
						</Grid>
					)}
				</Box>
			</SlideFade>
		</Box>
	);
}

export default ProfileView;
