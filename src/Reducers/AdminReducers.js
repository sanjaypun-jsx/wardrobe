import {
	ADMIN_LOGIN_FAIL,
	ADMIN_LOGIN_REQUEST,
	ADMIN_LOGIN_SUCCESS,
	ADMIN_LOGOUT,
	USER_LIST_FAIL,
	USER_LIST_REQUEST,
	USER_LIST_SUCCESS,
} from '../Constants/AdminConstants';

export const AdminLoginReducer = (state = {}, action) => {
	switch (action.type) {
		case ADMIN_LOGIN_REQUEST:
			return { loading: true };
		case ADMIN_LOGIN_SUCCESS:
			return {
				loading: false,
				adminInfo: action.payload,
			};
		case ADMIN_LOGIN_FAIL:
			return {
				loading: false,
				error: action.payload,
			};
		case ADMIN_LOGOUT:
			return {};
		default:
			return state;
	}
};

export const userListReducer = (state = { users: [] }, action) => {
	switch (action.type) {
		case USER_LIST_REQUEST:
			return { loading: true, users: [] };
		case USER_LIST_SUCCESS:
			return {
				loading: false,
				users: action.payload,
			};
		case USER_LIST_FAIL:
			return {
				loading: false,
				error: action.payload,
			};
		default:
			return state;
	}
};
