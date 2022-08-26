# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)





import React, { forwardRef, useEffect, useState } from "react";
import {
	Box,
	Button,
	Flex,
	Heading,
	Image,
	Stack,
	Text,
} from "@chakra-ui/react";
import { DLT } from "../Redux/AppReducer/action";
import { BsWindowSidebar } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

export const CartItem = ({ elem, cart, onChange }) => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const [quantity, setQuantity] = useState(0);
	console.log(quantity)
	
	const getdata = useSelector((state)=> state.cartreducer.carts);
	console.log(getdata);
  

	const [currentElement] = useState(() => {
		return getdata.find((el) => el.id === elem.id && setQuantity(el.qty));
	});

	const deleteItem = (index) => {
		getdata.splice(index, 1);
	};

	

	useEffect(() => {
		if (quantity <= 0) {
			getdata?.find((item, index) => item.id === elem.id && deleteItem(index));
		}
		onChange();
	}, [quantity]);

	const increment = () => {
		getdata.find(
			(item) => item.id === elem.id && item.qty++ && setQuantity(item.qty)
		);
		
	};

	const decrement = () => {
		getdata.find(
			(item) =>
				item.id === elem.id &&
				item.qty > 0 &&
				item.qty-- &&
				setQuantity(item.qty)
		);
		
	};
	const goToDetailPage = () => {
		navigate(`/product/${elem.category}/${elem.name}/${elem.id}`);
	};
	const dlt = (id)=>{
		dispatch(DLT(id))
	}
	
	

	return (
		<Flex
			direction={{
				base: "column",
				md: "row",
			}}
			justify="space-between"
			align="center"
		>
			<Stack direction="row" spacing="5" width="full" height="200px">
				<Image
					rounded="lg"
					width="250px"
					height="150PX"
					fit="cover"
					src={elem.image}
					alt=""
					draggable="false"
					loading="lazy"
				/>

				<Box>
					<Stack spacing="0.5">
						<Text fontWeight="medium" onClick={goToDetailPage}>
							{elem.name}
						</Text>
						<Text color="green" fontSize="sm">
							In Stock
						</Text>
					</Stack>

					<div style={{ display: "flex" }}>
						<div
							style={{ display: "flex", justifyContent: "right", gap: "10px" }}
						>
							<div
								style={{
									justifyContent: "center",
									textAlign: "center",
									fontSize: "25px",
									cursor: "pointer",
									backgroundColor: "rgb(0,142,204)",
									height: "40px",
									width: "40px",
									color: "white",
									borderRadius: "50%",
								}}
								onClick={decrement}
							>
								-
							</div>
							<div style={{ height: "30px", width: "35px", fontSize: "20px" }}>
								{elem.quantity}
							</div>
							<div
								style={{
									marginLeft: "-15px",
									justifyContent: "center",
									textAlign: "center",
									fontSize: "25px",
									cursor: "pointer",
									backgroundColor: "rgb(0,142,204)",
									height: "40px",
									width: "40px",
									color: "white",
									borderRadius: "50%",
								}}
								onClick={increment}
							>
								+
							</div>
						</div>
					</div>

					<Button
						width="100px"
						height="20px"
						backgroundColor="white"
						color="blue"
						borderRadius="0PX"
						fontSize="sm"
						onClick={()=>dlt(elem.id)}
					>
						Remove
					</Button>
				</Box>

				<Box direction="column" width="full">
					<Box width="full">
						<Flex
							width="full"
							justify="space-evenly"
							display={{
								base: "none",
								md: "flex",
							}}
						>
							<Heading fontSize="1.5xl" fontWeight="bold" color="#333333">
								EACH ITEM
							</Heading>
							<Heading fontSize="1.5xl" fontWeight="bold" color="#333333">
								TOTAL PRICE
							</Heading>
						</Flex>
					</Box>
					<Box width="full">
						<Flex
							width="full"
							justify="space-evenly"
							display={{
								base: "none",
								md: "flex",
							}}
						>
							<Heading fontSize="10px" padding="15px">
								₹ {elem.price1 * elem.qty}.00
							</Heading>
							<Heading fontSize="14px" padding="15px">
								₹ {elem.price1 * elem.qty}.00
							</Heading>
						</Flex>
					</Box>
				</Box>
			</Stack>

			<Box
				width="full"
				display={{
					base: "flex",
					md: "none",
				}}
			>
				<Flex
					mt="4"
					align="center"
					width="full"
					justify="space-between"
					display={{
						base: "flex",
						md: "none",
					}}
				>
					<Heading fontSize="1.5xl" fontWeight="bold" color="#333333">
						EACH ITEM
					</Heading>
					<Heading fontSize="1.5xl" fontWeight="bold" color="#333333">
						TOTAL PRICE
					</Heading>
				</Flex>
			</Box>
			<Box
				width="full"
				display={{
					base: "flex",
					md: "none",
				}}
			>
				<Flex
					mt="4"
					align="center"
					width="full"
					justify="space-between"
					display={{
						base: "flex",
						md: "none",
					}}
				>
					<Heading fontSize="10px" padding="15px">
						₹ {elem.price1 * elem.qty}.00
					</Heading>
					<Heading fontSize="14px" padding="15px">
						₹ {elem.price1 * elem.qty}.00
					</Heading>
				</Flex>
			</Box>
		</Flex>
	);
};
