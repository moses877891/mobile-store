import { CART_ACTION_TYPES } from "./cart.types";

export const INITIAL_STATE = {
    isCartOpen: false,
    isModalOpen: false,
    cartItems: []
}

export const cartReducer = (state = INITIAL_STATE, action = {}) => {
    const { type, payload } = action;

    switch (type) {
        case CART_ACTION_TYPES.SET_CART_ITEMS:
            return {
                ...state,
                cartItems: payload
            }

        case CART_ACTION_TYPES.SET_IS_MODAL_OPEN:
            return {
                ...state,
                isModalOpen: payload
            }

        case CART_ACTION_TYPES.SET_IS_CART_OPEN:
            return {
                ...state,
                isCartOpen: payload
            }
        default:
            return state;
    }
}