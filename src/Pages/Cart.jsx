import {
	Box,
	Flex,
	Input,
	Button,
	Select,
	Text,
	Stack,
	HStack,
	Heading,
	VStack,
  useBoolean,
  Popover,
  PopoverAnchor,
  PopoverBody,
  PopoverContent,PopoverTrigger

} from "@chakra-ui/react";
import { FaCheckCircle } from "react-icons/fa";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import { CartItem } from "./CartItem";

const Cart = () => {
	const getdata = useSelector((state) => state.cartreducer.carts);
	console.log(getdata);
	const { id } = useParams();
	console.log(id);
	const [price, setPrice] = useState([]);
	const [state, updateState] = useState();
	const forceUpdate = React.useCallback(() => updateState({}), []);
	const navigate = useNavigate();

	const handleCheckout = () => {
		navigate("/checkoutpage");
	};
  const [isEditing, setIsEditing] = useBoolean()
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

	if (getdata.length == []) {
	  return (
	    <>

	      <div className="p-[20px]">
	        <Link to={"/"}>
	          <h1>
	            <i
	              className="bx bx-left-arrow-alt"
	              style={{ color: "#7a7575", fontSize: "12px" }}
	            ></i>{" "}
	            <span className="text-[#7a7575] underline text-[12px]">
	              CONTINUE SHOPPING
	            </span>
	          </h1>
	        </Link>
	      </div>
	      <section className="h-[fit-content] w-[955px] m-auto">

	        <img src="https://user-images.githubusercontent.com/97461362/194503212-27bdf8e6-2a6a-42e4-a09b-8a915cbc47b9.png" alt="" />

	      </section>

	    </>
	  );
	}
	 else {
	function PriceWrapper({ children }) {
		return (
			<Box
				mb={4}
				shadow="base"
				borderWidth="1px"
        // border="1px solid yellow"
				alignSelf={{
					base: "center",
					lg: "flex-start",
				
				}}
				borderRadius={"xl"}
       
			>
				{children}
			</Box>
		);
	}

	return (
		<>
			<Box py={12} margin="6%" marginTop="0%">
				<Box marginBottom="4%">
					<img
						src="https://user-images.githubusercontent.com/97461362/194566034-3214661c-3f5b-4317-9f87-053492e74713.png
        "
						alt=""
					/>
					<img
						src="https://www.bathandbodyworks.in/on/demandware.static/Sites-BathAndBodyWorks-Site/-/default/dw5d45c735/images/BBW-strip.jpg"
						alt=""
					/>
				</Box>
				<Stack
					direction={{ base: "column", md: "row" }}
					// textAlign="center"
					justifyContent="space-evenly"
					// spacing={{ base: 4, lg: 10 }}
					// py={10}
					// border="1px solid yellow"
				>
					<Box backgroundColor="white" height="auto" width="70%" 
          
        >
						{/* <Heading fontSize="23px" padding="30px"></Heading> */}
						{/* add to cart will show here */}
						{getdata.length > 0 &&
							getdata.map((e, id) => {
								return (
									<CartItem elem={e} cart={getdata} onChange={forceUpdate} />
								);
							})}
					</Box>
          <Box   marginLeft="7%" width="30px"></Box>
<Box  border="1px solid hsl(0,0%,92%)" marginLeft="7%"></Box>

					<>
						<Box  backgroundColor="white" >
							<Flex direction="column" >
								<div style={{ padding: "10px", backgroundColor: "white"}}>
									<Heading fontSize="14px" padding="10px" fontWeight="500">
										Apply Coupon
									</Heading>
								

<Popover
      isOpen={isEditing}
      
      onOpen={setIsEditing.on}
      onClose={setIsEditing.off}
     
      isLazy
      lazyBehavior='keepMounted'
    >
      <HStack>
        <PopoverAnchor>
          <Input
           
            w='70%'
            display='inline-flex'
            
            placeholder="Enter coupon code"
          />
        </PopoverAnchor>

        <PopoverTrigger>
          <Button h='40px' colorScheme='blue' width="30%">
            {/* {!isEditing ? 'enter' : 'Apply'} */}
            Apply
          </Button>
        </PopoverTrigger>
      </HStack>
<Box color="red">
{
            !isEditing ? "":" Coupon cannot be added to your cart"
          }
</Box>
        
       
        

    </Popover>

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
									onClick={handleCheckout}
									colorScheme="blue"
									variant="solid"
									width="230px"
									marginLeft="auto"
									backgroundColor="black"
								>
									CONTINUE CHECKOUT
								</Button>
							</Flex>
						</Box>
					</>
				</Stack>
			</Box>
			<Flex
				direction="column"
				backgroundColor="white"
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

				<Flex direction="row" padding="30px"></Flex>
			</Flex>
		</>
	);
};
}

export default Cart;
