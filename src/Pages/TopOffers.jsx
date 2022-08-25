

import React from "react";
import {
	Box,
	Center,
	Heading,
	Text,
	Stack,
	Image,
	Button,
	Grid,
	GridItem,

} from "@chakra-ui/react";


const TopOffers = () => {
	return (
		<div>
			<Center   direction="column">
		
		<Grid templateColumns="repeat(1, 1fr)" gap={6}>
			<GridItem w="100%" h="100%" bg="white">
			
		<Heading>TOP OFFERS</Heading>
			</GridItem>
			<GridItem w="100%" h="100%" bg="white">
			<Text>Too good to pass up! Shop our best offers now.</Text>
			<hr
          style={{
            width: "600px",
            borderTop: "1px solid black",
          }}
        />
		
			</GridItem>
		
		</Grid>

		
	</Center>
		<Center py={12}  direction="column">
		
		<Grid templateColumns="repeat(1, 1fr)" gap={6}>
			<GridItem w="100%" h="100%" bg="white">
			<img src="https://www.bathandbodyworks.in/on/demandware.static/-/Sites/default/dw8b4c3da0/Top-Offers%20%281%29.jpg" alt="" />
			
			</GridItem>
		
		</Grid>

		
	</Center>
			
			<Center py={12}  direction="column">
		
				<Grid templateColumns="repeat(2, 1fr)" gap={6}>
					<GridItem w="100%" h="100%" bg="white">
					<img src="https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_storefront_catalog/default/dwce84ba9c/Mist.jpg" alt="" />

					<p>BODY MIST</p>
					<Heading fontSize="23px" fontWeight="400">All @ Rs.659</Heading>
					<Button width="150px" border="1px solid black" backgroundColor="white">SHOP</Button>

					</GridItem>
					<GridItem w="100%" h="100%" bg="white"><img src="https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_storefront_catalog/default/dw918d7b8f/fbc_tropicals_sp4_ss.jpg" alt="" />
					<p>BODY CARE</p>
					<Heading fontSize="23px" fontWeight="400">Buy 2 Get 1</Heading>
					<Button width="150px" border="1px solid black" backgroundColor="white">SHOP</Button>
					
					
					</GridItem>
				</Grid>

				
			</Center>
			<Center py={12}  direction="column">
				<Grid templateColumns="repeat(2, 1fr)" gap={6}>
					<GridItem w="100%" h="100%" bg="white">
						<img src="https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_storefront_catalog/default/dw399802c0/3-Wick.jpg" alt="" />

						<p>3-WICK CANDLES</p>
					<Heading fontSize="23px" fontWeight="400">All @ Rs.1999</Heading>
					<Button width="150px" border="1px solid black" backgroundColor="white">SHOP</Button>
					</GridItem>
					<GridItem w="100%" h="100%" bg="white">
						<img src="https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_storefront_catalog/default/dw01a4ff4b/cndl_sw-tropicals_sp4_ss.jpg" alt="" />

						<p>SINGLE WICK CANDLES</p>
					<Heading fontSize="23px" fontWeight="400">All @ Rs.999</Heading>
					
					<Button width="150px" border="1px solid black" backgroundColor="white">SHOP</Button>
					</GridItem>
				</Grid>

				
			</Center>
			<Center py={12}  direction="column">
				<Grid templateColumns="repeat(2, 1fr)" gap={6}>
					<GridItem w="100%" h="100%" bg="white">
						<Image src="https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_storefront_catalog/default/dwde4b8729/sp_tropical_sp4_ss.jpg" alt=""  width="300px" />
						<p>HAND SOAP</p>
					<Heading fontSize="23px" fontWeight="400">Buy 4 at Rs.2099</Heading>
					<Button width="150px" border="1px solid black" backgroundColor="white">SHOP</Button>
					</GridItem>
					<GridItem w="100%" h="100%" bg="white">
						<img src="https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_storefront_catalog/default/dw477b4ce0/diff_ingredient_sp4_ss.jpg" alt="" />
						<p>ALL WALLFLOWER</p>
					<Heading fontSize="23px" fontWeight="400">Buy 2 Get 1</Heading>
					<Button width="150px" border="1px solid black" backgroundColor="white">SHOP</Button>
					</GridItem>
				</Grid>

				
			</Center>

			<Center py={12}>
				<Box
					p={6}
					maxW={"600px"}
					w={"full"}
					rounded={"lg"}
					pos={"relative"}
					
				>
					<Stack spacing={3}>
						<Text fontSize="3xl"> About Top Offers from Bath & Body Works</Text>
						<Text fontSize="1xl">
							{" "}
							Welcome to the one-stop-shop for all Bath & Body Works coupons.
							This is the spot to watch for the latest deals, coupon codes,
							hottest steals and the most need-right-now promotions we’ve got
							going on. From home fragrance favorites to body care loves, we
							definitely have something amazing for whatever mood (or season)
							you’re feeling..
						</Text>
						<Text fontSize="1xl">
							And while you’re here, let’s talk about a few things that we’re
							totally obsessed with right now. After all, a Bath & Body Works
							promotion is the best time to try something new, right? We’re
							super excited about our new body care collections (they’re
							basically joy in a bottle), and our latest candle and Wallflowers
							arrivals turn your home into a fragrance paradise. Trust us: with
							Bath & Body Works coupons, you actually can have it all!
						</Text>

						<Text fontSize="1xl">
							Another way we love using Bath & Body Works coupon codes? On
							gifts, of course! Check your calendar: if you have any birthdays
							or holidays on the horizon, this would be the perfect time to
							stock up on someone’s (or your) favorite fragrance. You could even
							score a few extra hand soaps or single wick candles to keep in
							your gift closet for the next celebration. (Incredible gifting
							strategy, go you!) And if you have a few common questions, let’s
							answer them here…
						</Text>

						<Text fontSize="1xl">
							How do you get Bath & Body Works coupons mailed to you? Just fill
							out our Mailing Address Update email form. Choose "Add me to your
							mailing list" as your Request Type and provide all relevant
							information. Then you should be good to go!
						</Text>
					</Stack>
				</Box>
			</Center>
		</div>
	);
};

export default TopOffers;
