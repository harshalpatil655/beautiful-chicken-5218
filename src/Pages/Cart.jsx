import {
	Box,
	Flex,
	Heading,
	Input,
	Button,
	Select,
	Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import { CartItem } from "./CartItem";

const Cart = () => {
	const dispatch = useDispatch();

	const getdata = useSelector((state) => state.cartreducer.carts);
	console.log(getdata);
	const { id } = useParams();
	console.log(id);
	const [price, setPrice] = useState([]);
	const [state, updateState] = useState();
	const forceUpdate = React.useCallback(() => updateState({}), []);

	const total = () => {
		let price = 0;
		getdata.map((ele, k) => {
			price = ele.price * ele.qnty + price;
		});
		setPrice(price);
	};
	useEffect(() => {
		total();
	}, [total]);

	return (
		<>
			<Flex
				direction="column"
				backgroundColor="rgb(236,236,237)"
				justifyContent="space-around"
			>
				{/* //parent */}
				<Flex direction="row" padding="30px 50px">
					<Box>
						<img
							src="https://www.bathandbodyworks.in/on/demandware.static/Sites-BathAndBodyWorks-Site/-/default/dw5d45c735/images/BBW-strip.jpg"
							alt=""
						/>
					</Box>
				</Flex>

				<Flex direction="row" padding="30px" justifyContent="space-around">
					<Box width="55%" height="600px">
						<Box backgroundColor="white" height="auto">
							<Heading fontSize="23px" padding="30px"></Heading>
							{/* add to cart will show here */}
							{getdata.length > 0 &&
								getdata.map((e, id) => {
									return (
										<CartItem elem={e} cart={getdata} onChange={forceUpdate} />
									);
								})}
						</Box>
					</Box>
					<Box width="40%" backgroundColor="white">
						<Flex direction="column" gap="30px">
							<div style={{ padding: "10px", backgroundColor: "white" }}>
								<Heading fontSize="14px" padding="10px" fontWeight="500">
									Apply Coupon
								</Heading>
								<Flex direction="row" gap="30px" justifyContent="space-between">
									{" "}
									<Input placeholder="Enter Coupon Code" />
									<Button
										colorScheme="blue"
										backgroundColor="blue"
										size="sm"
										variant="link"
										padding="10px"
										color="white"
										width="200px"
									>
										Apply
									</Button>
								</Flex>
							</div>

							<div
								style={{
									backgroundColor: "white",
									padding: "10px",
									textAlign: "start",
								}}
							>
								<Flex direction="column" backgroundColor="white">
									{" "}
									<Heading fontSize="16px" padding="10px" fontWeight="400">
										SHIPPING METHOD
									</Heading>
									<Select
										placeholder="Standard (Estimated Delivery in 5 to 7 Days"
										width="90%"
									></Select>
								</Flex>

								<Text fontSize="15px" padding="10px" fontWeight="400">
									ORDER DETAILS
								</Text>
								<Text fontSize="12px" padding="10px" fontWeight="400">
									Prices are inclusive of all taxes
								</Text>
								<Text fontSize="15px" padding="10px" fontWeight="400">
									ORDER SUMMARY
								</Text>
								<div
									style={{ display: "flex", justifyContent: "space-between" }}
								>
									<Text fontSize="15px" fontWeight="90px" padding="10px">
										Total Mrp
									</Text>
									<Text fontSize="15px" fontWeight="400" padding="10px">
										${price}.00
									</Text>
								</div>
								<hr style={{ color: "gray" }} />
								<div
									style={{ display: "flex", justifyContent: "space-between" }}
								>
									<Text fontSize="15px" fontWeight="90px" padding="10px">
										Shipping charges
									</Text>
									<Text
										color="black"
										fontSize="15px"
										fontWeight="400"
										padding="10px"
									>
										$0.00
									</Text>
								</div>
								<div
									style={{ display: "flex", justifyContent: "space-between" }}
								>
									<Text fontSize="15px" fontWeight="90px" padding="10px">
										Order Amount
									</Text>
									<Text
										color="black"
										fontSize="15px"
										fontWeight="400"
										padding="10px"
									>
										${price}.00
									</Text>
								</div>
								<hr style={{ color: "gray" }} />
								<div
									style={{ display: "flex", justifyContent: "space-between" }}
								>
									<Text
										color="black"
										fontSize="18px"
										fontWeight="bold"
										padding="10px"
									>
										Total Amount
									</Text>
									<Text
										color="black"
										fontSize="15px"
										fontWeight="bold"
										padding="10px"
									>
										${price}.00
									</Text>
								</div>
							</div>

							<Button
								colorScheme="blue"
								variant="solid"
								width="230px"
								marginLeft="auto"
								backgroundColor="black"
							>
								<a href="/checkout">CONTINUE CHECKOUT</a>{" "}
							</Button>
						</Flex>
					</Box>
				</Flex>
			</Flex>
		</>
	);
};

export default Cart;
