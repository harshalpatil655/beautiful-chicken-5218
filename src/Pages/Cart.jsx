import {
	Box,
	Flex,
	Heading,
	Input,
	Button,
	Image,
	Select,
	Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { BsClipboardCheck } from "react-icons/bs";
import { HiShoppingCart } from "react-icons/hi";
import { MdOutlinePayment } from "react-icons/md";
import { useNavigate } from "react-router-dom";

import { CartItem } from "./CartItem";

const Cart = () => {
	let cart = JSON.parse(localStorage.getItem("CartData")) || [];

	const [state, updateState] = useState();
	const forceUpdate = React.useCallback(() => updateState({}), []);

	let totalPrice1 = cart.reduce((acc, elem) => {
		return acc + elem.qty * Math.floor(Number(elem.price2));
	}, 0);

	let totalPrice2 = cart.reduce((acc, elem) => {
		return acc + elem.qty * elem.price1;
	}, 0);

	console.log(cart);

	return (
		<Flex direction="column" backgroundColor="rgb(236,236,237)">
			{/* //parent */}
			<Flex direction="row" padding="30px 50px" justifyContent="space-between">
				<Box>
					<Heading fontSize="23px">My Cart</Heading>
				</Box>
				{cart.length > 0 && (
					<Flex>
						<Box>
							{" "}
							<ul style={{ display: "flex", "list-style-type": "none" }}>
								<li>
									<HiShoppingCart size="22px" color="rgb(0,142,204)" />
								</li>
								<li>
									<Heading fontSize="13px" fontWeight="90px">
										My Cart
									</Heading>
								</li>
								<li>
									<div className="line" />
								</li>
								<li>
									<BsClipboardCheck size="21px" color="rgb(0,142,204)" />
								</li>
								<li>
									<Heading fontSize="13px" fontWeight="90px">
										Order Summary
									</Heading>
								</li>
								<li>
									<div className="line" />
								</li>
								<li>
									<MdOutlinePayment size="21px" color="rgb(0,142,204)" />
								</li>
								<li>
									<Heading fontSize="13px" fontWeight="90px">
										Payment
									</Heading>
								</li>
							</ul>
						</Box>
					</Flex>
				)}
			</Flex>

			<Flex
				direction="row"
				justifyContent="space-between"
				padding="30px"
				px="30px"
			>
				<Box width="55%" height="600px" overflow="scroll">
					<Box backgroundColor="white" height="auto">
						<Heading fontSize="23px" padding="30px">
							Basket {}{" "}
						</Heading>
						{/* add to cart will show here */}
						{cart.length > 0 &&
							cart.map((e) => {
								return <CartItem elem={e} cart={cart} onChange={forceUpdate} />;
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

						<Flex direction="column" backgroundColor="white">
							{" "}
							<Heading fontSize="16px" padding="10px" fontWeight="400">
								SHIPPING METHOD
							</Heading>
							<Select placeholder="Standard (Estimated Delivery in 5 to 7 Days" width="90%" marginLeft="3%"></Select>
						</Flex>

						<div style={{ backgroundColor: "white", padding: "10px" }}>
							<Text fontSize="15px" padding="10px" fontWeight="400">
								ORDER DETAILS
							</Text>
							<Text fontSize="12px" padding="10px" fontWeight="400">
								Prices are inclusive of all taxes
							</Text>
							<Text fontSize="15px" padding="10px" fontWeight="400">
								ORDER SUMMARY
							</Text>
							<div style={{ display: "flex", justifyContent: "space-between" }}>
								<Text
									
									fontSize="15px"
									fontWeight="90px"
									padding="10px"
                  
								>
									Total Mrp
								</Text>
								<Text
									
									fontSize="15px"
									fontWeight="bold"
									padding="10px"
								>
									₹{totalPrice1}.00
								</Text>
							</div>
							<hr style={{ color: "gray" }} />
							<div style={{ display: "flex", justifyContent: "space-between" }}>
								<Text
								
									fontSize="15px"
									fontWeight="90px"
									padding="10px"
								>
									Shipping charges
								</Text>
								<Text
									color="black"
									fontSize="15px"
									fontWeight="bold"
									padding="10px"
								>
									-₹{totalPrice1 - totalPrice2}.00
								</Text>
							</div>
							<hr style={{ color: "gray" }} />
							<div style={{ display: "flex", justifyContent: "space-between" }}>
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
									₹{totalPrice2}.00
								</Text>
							</div>
						</div>
						<Button
							colorScheme="blue"
							variant="solid"
							width="230px"
							marginLeft="auto"
						>
							<a href="/checkout">CONTINUE CHECKOUT</a>{" "}
						</Button>
					</Flex>
				</Box>
			</Flex>
		</Flex>
	);
};

export default Cart;
