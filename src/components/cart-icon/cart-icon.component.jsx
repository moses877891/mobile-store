import { useSelector, useDispatch } from "react-redux";

import { selectCartCount, selectIsCartOpen } from "../../store/cart/cart.selector";
import { setIsCartOpen } from '../../store/cart/cart.action';

import ShoppingIcon from '../../assets/shopping-bag.svg';
import './cart-icon.styles.scss';

const CartIcon = () => {
    const dispatch = useDispatch();

    const cartCount = useSelector(selectCartCount);
    const isCartOpen = useSelector(selectIsCartOpen);

    const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen))

    return (
        <span className="w-5 cursor-pointer mt-1" onClick={toggleIsCartOpen}>
            <img src={ShoppingIcon} alt="shopping cart" />
            <span className="cart-count-number">
                {cartCount}
            </span>
        </span>
    )
}

export default CartIcon;