import { Box, Center, Fade, Image, Link, Spinner } from '@chakra-ui/react';
import { loginStyle } from '../styles/shop';
import styles from '../styles/login.module.css';
import { useState } from 'react';

function Login() {
	const [ isLoading, setLoading ] = useState(true);
	setTimeout(() => {
		setLoading(false);
	}, 1500);

	if (isLoading) {
		return (
			<Center height="90vh" display="flex" justifyContent="center" alignContent="center">
				<Spinner thickness="4px" speed="0.65s" emptyColor="yellow.200" color="red.500" size="xl" />
			</Center>
		);
	}
	return (
		<Fade in={!isLoading}>
			<Box>
				<Box p="30px">
					<Link href="/">⬅️ 🛒 Back to Shopping</Link>
				</Box>
				<Center height="90vh">
					<Image class={styles.login} src="https://i.imgur.com/vu1ofbI.png" alt="Smiling" />
				</Center>
				<Image style={loginStyle} src="https://i.imgur.com/AY98J0m.png" alt="Wavy" />
				{/* <Image style={loginStyle} src="https://i.imgur.com/ZyfrKJf.png" alt="Wavy" /> */}
			</Box>
		</Fade>
	);
}
export default Login;
