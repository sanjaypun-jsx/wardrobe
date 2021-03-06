import {
	CLEAR_CART,
	GET_CART_ITEMS_FAIL,
	GET_CART_ITEMS_REQUEST,
	GET_CART_ITEMS_SUCCESS,
	REMOVE_ITEM_FROM_CART,
} from '../Constants/GetCartItemsConstant';

export const GetCartItemsReducer = (state = { cartItems: [] }, action) => {
	switch (action.type) {
		case GET_CART_ITEMS_REQUEST:
			return { cartItems: [], loading: true };
		case GET_CART_ITEMS_SUCCESS:
			return {
				loading: false,
				cartItems: action.payload,
			};
		case GET_CART_ITEMS_FAIL:
			return {
				loading: false,
				error: action.payload,
			};
		default:
			return state;
	}
};

export const RemoveItemFromCartReducer = (state = {}, action) => {
	switch (action.type) {
		case REMOVE_ITEM_FROM_CART:
			return {
				...state,
				status: action.payload,
			};
		default:
			return state;
	}
};

export const ClearCartReducer = (state = {}, action) => {
	switch (action.type) {
		case CLEAR_CART:
			return {
				...state,
				status: action.payload,
			};
		default:
			return state;
	}
};
