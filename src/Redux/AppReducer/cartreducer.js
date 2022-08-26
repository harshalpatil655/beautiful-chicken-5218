// const initialState = {
// 	item: products,

//   };
  



// export const cartreducer = (state=initialS, action) => {
// 	if (action.type === "REMOVE_ITEM") {
// 	  return {
// 		...state,
// 		item: state.item.filter((curElem) => {
// 		  return curElem.id !== action.payload;
// 		}),
// 	  };
// 	}
  
// 	if (action.type === "CLEAR_CART") {
// 	  return { ...state, item: [] };
// 	}
  
// 	if (action.type === "INCREMENT") {
// 	  const updatedCart = state.item.map((curElem) => {
// 		if (curElem.id === action.payload) {
// 		  return { ...curElem, quantity: curElem.quantity + 1 };
// 		}
// 		return curElem;
// 	  });
  
// 	  return { ...state, item: updatedCart };
// 	}
  
// 	if (action.type === "DECREMENT") {
// 	  const updatedCart = state.item
// 		.map((curElem) => {
// 		  if (curElem.id === action.payload) {
// 			return { ...curElem, quantity: curElem.quantity - 1 };
// 		  }
// 		  return curElem;
// 		})
// 		.filter((curElem) => curElem.quantity !== 0);
// 	  return { ...state, item: updatedCart };
// 	}
  
// 	if (action.type === "GET_TOTAL") {
// 	  let { totalItem, totalAmount } = state.item.reduce(
// 		(accum, curVal) => {
// 		  let { price, quantity } = curVal;
  
// 		  let updatedTotalAmount = price * quantity;
// 		  accum.totalAmount += updatedTotalAmount;
  
// 		  accum.totalItem += quantity;
// 		  return accum;
// 		},
// 		{
// 		  totalItem: 0,
// 		  totalAmount: 0,
// 		}
// 	  );
// 	  return { ...state, totalItem, totalAmount };
// 	}
// 	return state;
//   };




  const INIT_STATE = {
	carts: [],
	totalAmount: 0,
	totalItem: 0,
};

export const cartreducer = (state = INIT_STATE, action) => {
	switch (action.type) {
		case "ADD_CART":
			const IteamIndex = state.carts.findIndex(
				(iteam) => iteam.id === action.payload.id
			);

			if (IteamIndex >= 0) {
				state.carts[IteamIndex].qnty += 1;
				return {
					...state,
					carts: [...state.carts],
				};
			} else {
				const temp = { ...action.payload, qnty: 1 };
				return {
					...state,
					carts: [...state.carts, temp],
				};
			}

		case "RMV_CART":
			const data = state.carts.filter((el) => el.id !== action.payload);
			// console.log(data);

			return {
				...state,
				carts: data,
			};

		case "RMV_ONE":
			const IteamIndex_dec = state.carts.findIndex(
				(iteam) => iteam.id === action.payload.id
			);

			if (state.carts[IteamIndex_dec].qnty >= 1) {
				const dltiteams = (state.carts[IteamIndex_dec].qnty -= 1);
				console.log([...state.carts, dltiteams]);

				return {
					...state,
					carts: [...state.carts],
				};
			} else if (state.carts[IteamIndex_dec].qnty === 1) {
				const data = state.carts.filter((el) => el.id !== action.payload);

				return {
					...state,
					carts: data,
				};
			}

		default:
			return state;
	}
};


    

