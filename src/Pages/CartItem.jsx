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
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { REMOVE } from "../Redux/AppReducer/action";
import { ADD } from "../Redux/AppReducer/action";
function PriceWrapper({ children }) {
	return (
		<Box
			mb={4}
			shadow="base"
			justifyContent="space-around"
			borderWidth="1px"
			alignSelf={{ base: "center", lg: "flex-start" }}
			borderRadius={"xl"}
		>
			{children}
		</Box>
	);
}

export const CartItem = ({ elem, cart, onChange }) => {
	const { id } = useParams();

	const navigate = useNavigate();
	const dispatch = useDispatch();

	const getdata = useSelector((state) => state.cartreducer.carts);
	// console.log(getdata);

	const [quantity, setQuantity] = useState(1);
	// console.log(quantity);

	const [data, setData] = useState([]);
	// console.log(data)
	const compare = () => {
		let comparedata = getdata.filter((e) => {
			return e.id == id;
		});
		setData(comparedata);
	};
	const send = (e) => {
		// console.log(e);
		dispatch(ADD(e));
	};

	const remove = (item) => {
		dispatch(REMOVE(item));
	};

	const dlt = (id) => {
		dispatch(DLT(id));
	};
	useEffect(() => {
		compare();
	}, [id]);

	return (
		<>
			<Box width="full">
				<Stack
					direction={{ base: "column", md: "row" }}
					spacing={{ base: 4, lg: 10 }}
					py={1}
					// border="5px solid red"
					justifyContent="space-between"
				>
					<Box py={1} px={1}>
						<Image width="110px" height="150PX" src={elem.image} alt="" />
					</Box>

					<>
						<Box>
							<Box w="200px" textAlign="center">
								<Stack
									direction="row"
									spacing="5"
									width="full"
									// border="1px solid green"
								>
									<Box>
										<Stack spacing="1.5">
											<Text fontWeight="medium">{elem.name}</Text>
											<Text color="green" fontSize="sm">
												In Stock
											</Text>

											<div style={{ display: "flex", width: "120px" }}>
												<div style={{ display: "flex", gap: "5px" }}>
													<div
														style={{
															fontSize: "15px",
															cursor: "pointer",

															height: "29px",
															width: "30px",
															color: "black",
															backgroundColor: "white",
														}}
														onClick={
															elem.qnty <= 1
																? () => dlt(elem.id)
																: () => remove(elem)
														}
													>
														-
													</div>
													<div
														style={{
															marginLeft: "5px",
															fontSize: "15px",
															cursor: "pointer",

															height: "29px",
															width: "30px",
															color: "black",
															backgroundColor: "white",
														}}
														onClick={
															elem.qnty <= 1
																? () => dlt(elem.id)
																: () => remove(elem)
														}
													>
														{elem.qnty}
													</div>
													<div
														style={{
															marginLeft: "5px",
															fontSize: "15px",
															cursor: "pointer",

															height: "29px",
															width: "30px",
															color: "black",
															backgroundColor: "white",
														}}
														onClick={() => send(elem)}
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
												onClick={() => dlt(elem.id)}
											>
												Remove
											</Button>
										</Stack>
									</Box>
								</Stack>
							</Box>
						</Box>
					</>
					<>
						<Box width="full" height="auto" marginRight="4%">
							<Box width="full">
								<Flex justifyContent="space-between">
									<Heading fontSize="1.5xl" fontWeight="500" color="#333333">
										EACH ITEM
									</Heading>
									<Heading fontSize="1.5xl" fontWeight="500" color="#333333">
										TOTAL PRICE
									</Heading>
								</Flex>
							</Box>
							<Box width="full">
								<Flex justifyContent="space-between">
									<Heading fontSize="13px" padding="15px" fontWeight="400">
										$ {elem.price}.00
									</Heading>
									<Heading fontSize="16px" padding="15px" fontWeight="400">
										$ {elem.price * elem.qnty}.00
									</Heading>
								</Flex>
							</Box>
						</Box>
					</>
				</Stack>
			</Box>
		</>
	);
};
