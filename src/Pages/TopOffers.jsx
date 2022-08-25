// import React from "react";
// import styles from "../CSS/TopOffer.module.css";
// import { Link } from "react-router-dom";

// const TopOffers = () => {
//   return (
//     <>

//       <div
//         style={{
//           width: "45%",
//           marginLeft: "28%",

//         }}
//         className="mt-5"
//       >
//         <span
//           style={{ fontSize: "30px", fontWeight: "bold", marginLeft: "10px" }}
//         >
//           TOP OFFERS
//         </span>
//         <span
//           style={{
//             fontSize: "18px",
//             color: "rgb(102, 98, 98)",
//             marginLeft: "20px",
//           }}
//         >
//           Too good to pass up! Shop our best offers now.
//         </span>
//         <hr
//           style={{
//             width: "100%",
//             borderTop: "1px solid black",
//           }}
//         />
//         {/* <---:link section:---> */}
//         <div
//           className="grid grid-cols-2 gap-[30px]"
//           style={{ marginTop: "40px", marginBottom: "40px" }}
//         >
//           <Link to={"/all-candles"}>
//             <img
//               src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw51fe9457/images/Spring2022/12953w_sp3_ss_0.jpg?yocs=o_s_"
//               alt=""
//             />
//             <p style={{ fontWeight: "bold", textAlign: "center" }}>
//               LIMITED TIME ONLY!
//             </p>
//             <p style={{ textAlign: "center" }}>3-Wick Candles</p>
//             <p style={{ textAlign: "center" }}>
//               <span style={{ fontSize: "19px" }}>$</span>
//               <span style={{ fontSize: "25px" }}>12.95</span>
//             </p>

//             <button className={styles.topAtOffAt}>SHOP</button>
//           </Link>
//           <Link to={"/aromatherapy"}>
//             <img
//               src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw573cbc3b/images/Spring2022/obc_tbctier_sp3_ss.jpg?yocs=o_s_"
//               alt=""
//             />
//             <p
//               style={{
//                 marginLeft: "20px",
//                 marginRight: "20px",
//                 textAlign: "center",
//                 fontSize: "14px",
//               }}
//             >
//               All Full-Size Body Care (Including Aromatherapy!)
//             </p>
//             <p
//               style={{
//                 fontSize: "25px",
//                 textAlign: "center",
//                 marginBottom: "5px",
//               }}
//             >
//               Buy 3, Get 3 FREE
//             </p>
//             <button className={styles.topAtOffAt}>SHOP</button>
//           </Link>
//           <Link to={"/all-wallflowers"}>
//             <img
//               src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw96126717/images/Spring2022/diff_mday_sp3_ss.jpg?yocs=o_s_"
//               alt=""
//             />

//             <p style={{ textAlign: "center" }}>Wallflowers Fragrance Refills</p>
//             <p style={{ textAlign: "center" }}>
//               <span style={{ fontSize: "25px" }}>5/</span>
//               <span style={{ fontSize: "19px" }}>$</span>
//               <span style={{ fontSize: "25px" }}>25</span>
//             </p>

//             <button className={styles.topAtOffAt}>SHOP</button>
//           </Link>
//           <Link to={"/all-hand-soaps"}>
//             <img
//               src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw55bfb0b6/images/Spring2022/sp_garden-infusion_sp3_ss.jpg?yocs=o_s_"
//               alt=""
//             />
//             <p
//               style={{
//                 marginLeft: "20px",
//                 marginRight: "20px",
//                 textAlign: "center",
//                 fontSize: "14px",
//               }}
//             >
//               Hand Soaps
//             </p>
//             <p style={{ textAlign: "center", marginBottom: "5px" }}>
//               <span style={{ fontSize: "25px" }}>6/</span>
//               <span style={{ fontSize: "19px" }}>$</span>
//               <span style={{ fontSize: "25px" }}>27 o</span>
//               <span style={{ fontSize: "25px" }}>r 4/</span>
//               <span style={{ fontSize: "19px" }}>$</span>
//               <span style={{ fontSize: "25px" }}>20</span>
//             </p>
//             <button className={styles.topAtOffAt}>SHOP</button>
//           </Link>
//           <Link to={"/all-candles"}>
//             <img
//               src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw36bcc92f/images/Spring2022/cndl_sw_sp3_ss.jpg?yocs=o_s_"
//               alt=""
//             />
//             <p style={{ fontSize: "14px", textAlign: "center" }}>
//               Single Wick Candles
//             </p>

//             <p style={{ textAlign: "center" }}>
//               <span style={{ fontSize: "25px" }}>2/</span>
//               <span style={{ fontSize: "19px" }}>$</span>
//               <span style={{ fontSize: "25px" }}>22</span>
//             </p>

//             <button className={styles.topAtOffAt}>SHOP</button>
//           </Link>
//           <Link to={"/all-hand-soaps"}>
//             <img
//               src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw12b687f4/images/Spring2022/sn_pocketbac_sp3_ss.jpg?yocs=o_s_"
//               alt=""
//             />
//             <p
//               style={{
//                 marginLeft: "20px",
//                 marginRight: "20px",
//                 textAlign: "center",
//                 fontSize: "14px",
//               }}
//             >
//               Hand Sanitizer 5-Packs
//             </p>
//             <p style={{ textAlign: "center" }}>
//               <span style={{ fontSize: "19px" }}>$</span>
//               <span style={{ fontSize: "25px" }}>8</span>
//             </p>
//             <button className={styles.topAtOffAt}>SHOP</button>
//           </Link>
//         </div>
//         <hr
//           style={{
//             width: "100%",
//             borderTop: "1px solid black",
//           }}
//         />
//         {/* <---:End paragraph:---> */}
//         <div>
//           <p
//             style={{
//               marginTop: "30px",
//               fontSize: "25px",
//               fontWeight: "400",
//               color: "rgb(80, 78, 78)",
//             }}
//           >
//             About Top Offers from Bath & Body Works
//           </p>
//           <p
//             style={{
//               fontSize: "15px",
//               lineHeight: "25px",
//               marginTop: "20px",

//             }}
//           >
//             Welcome to the one-stop-shop for all Bath & Body Works coupons. This
//             is the spot to watch for the latest deals, coupon codes, hottest
//             steals and the most need-right-now promotions we’ve got going on.
//             From home fragrance favorites to body care loves, we definitely have
//             something amazing for whatever mood (or season) you’re feeling.
//           </p>
//           <p
//             style={{
//               fontSize: "15px",
//               lineHeight: "25px",
//               marginTop: "20px",

//             }}
//           >
//             And while you’re here, let’s talk about a few things that we’re
//             totally obsessed with right now. After all, a Bath & Body Works
//             promotion is the best time to try something new, right? We’re super
//             excited about our new body care collections (they’re basically joy
//             in a bottle), and our latest candle and Wallflowers arrivals turn
//             your home into a fragrance paradise. Trust us: with Bath & Body
//             Works coupons, you actually can have it all!
//           </p>
//           <p
//             style={{
//               fontSize: "15px",
//               lineHeight: "25px",
//               marginTop: "20px",

//             }}
//           >
//             Another way we love using Bath & Body Works coupon codes? On gifts,
//             of course! Check your calendar: if you have any birthdays or
//             holidays on the horizon, this would be the perfect time to stock up
//             on someone’s (or your) favorite fragrance. You could even score a
//             few extra hand soaps or single wick candles to keep in your gift
//             closet for the next celebration. (Incredible gifting strategy, go
//             you!) And if you have a few common questions, let’s answer them
//             here…
//           </p>
//           <p
//             style={{
//               fontSize: "15px",
//               lineHeight: "25px",
//               marginTop: "20px",

//             }}
//           >
//           How do you get Bath & Body Works coupons mailed to you? Just fill out our Mailing Address Update email form. Choose "Add me to your mailing list" as your Request Type and provide all relevant information. Then you should be good to go!
//           </p>

//         </div>
//       </div>

//     </>
//   );
// };

// export default TopOffers;

import React from "react";
import {
	Box,
	Center,
	useColorModeValue,
	Heading,
	Text,
	Stack,
	Image,
	Button,
	Grid,
	GridItem,
	Input,
	Divider,
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

{
	/* <Box
							rounded={"lg"}
							mt={-12}
							pos={"relative"}
							height={"230px"}
							_groupHover={{
								_after: {
									filter: "blur(20px)",
								},
							}}
						>
							<Image
								rounded={"lg"}
								height={230}
								width={282}
								objectFit={"cover"}
								src={item.image}
							/>
						</Box>
						<Stack pt={10} align={"center"} >
							<Text
								color={"gray.500"}
								fontSize={"sm"}
								textTransform={"uppercase"}
							>
								{item.title}
							</Text>
							<Heading fontSize={"2xl"} fontFamily={"body"} fontWeight={500}>
								{item.desc}
							</Heading>
							<Button
								w="200px"
								bg={"white"}
								color={"black"}
								border="1px solid black"
								// _hover={{
								//   transform: 'translateY(-2px)',
								//   boxShadow: 'lg',
								// }}
							>
								Shop
							</Button>
						</Stack>
					</Box> */
}
