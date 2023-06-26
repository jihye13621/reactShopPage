import { Grid, Skeleton, SkeletonText, Stack } from '@chakra-ui/react';

const SkeletonLoading = () => {
	return (
		<Stack>
			<Skeleton height="300px" />
			<Skeleton height="30px" />
			<SkeletonText mt="4" noOfLines={1} spacing="4" />
			<Grid templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(3,1fr)', lg: 'repeat(5, 1fr)' }} gap={6}>
				<Skeleton height="380px" />
				<Skeleton height="380px" />
				<Skeleton height="380px" />
				<Skeleton height="380px" />
				<Skeleton height="380px" />
				<Skeleton height="380px" />
				<Skeleton height="380px" />
				<Skeleton height="380px" />
				<Skeleton height="380px" />
				<Skeleton height="380px" />
				<Skeleton height="380px" />
				<Skeleton height="380px" />
				<Skeleton height="380px" />
				<Skeleton height="380px" />
				<Skeleton height="380px" />
				<Skeleton height="380px" />
			</Grid>
		</Stack>
	);
};

export default SkeletonLoading;
