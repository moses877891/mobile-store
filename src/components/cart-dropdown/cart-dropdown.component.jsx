import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import { selectIsCartOpen } from "../../store/cart/cart.selector";
import { setIsCartOpen } from "../../store/cart/cart.action";

import './cart-dropdown.styles.scss'

const CartdropDown = () => {
    const isCartOpen = useSelector(selectIsCartOpen);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const goToCheckoutHandler = () => {
        dispatch(setIsCartOpen(!isCartOpen));
        navigate('/checkout');
    }

    return (
        <div className="cart-dropdown-container">
            <button type="button"
                className="bg-black uppercase text-white p-1 rounded-md"
                onClick={goToCheckoutHandler}>checkout</button>
        </div>
    )
}

export default CartdropDown;