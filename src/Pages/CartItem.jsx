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
import { BsWindowSidebar } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

export const CartItem = ({ elem, cart, onChange }) => {
	const navigate = useNavigate();

	const [quantity, setQuantity] = useState(0);

	const [currentElement] = useState(() => {
		return cart.find((el) => el.id === elem.id && setQuantity(el.qty));
	});

	const deleteItem = (index) => {
		cart.splice(index, 1);
		localStorage.setItem("CartData", JSON.stringify(cart));
		cart = JSON.parse(localStorage.getItem("CartData")) || [];
		window.location.reload();
	};

	useEffect(() => {
		cart = JSON.parse(localStorage.getItem("CartData")) || [];
	}, [deleteItem]);

	useEffect(() => {
		if (quantity <= 0) {
			cart?.find((item, index) => item.id === elem.id && deleteItem(index));
		}
		onChange();
	}, [quantity]);

	const increment = () => {
		cart.find(
			(item) => item.id === elem.id && item.qty++ && setQuantity(item.qty)
		);
		localStorage.setItem("CartData", JSON.stringify(cart));
	};

	const decrement = () => {
		cart.find(
			(item) =>
				item.id === elem.id &&
				item.qty > 0 &&
				item.qty-- &&
				setQuantity(item.qty)
		);
		localStorage.setItem("CartData", JSON.stringify(cart));
	};
	const goToDetailPage = () => {
		navigate(`/product/${elem.category}/${elem.name}/${elem.id}`);
	};

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
								{quantity}
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
