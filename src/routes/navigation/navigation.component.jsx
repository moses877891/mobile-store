import { Outlet, useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";

import { selectIsCartOpen } from '../../store/cart/cart.selector'

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartdropDown from "../../components/cart-dropdown/cart-dropdown.component";

import './navigation.styles.scss';

const Navigation = () => {
    const isCartOpen = useSelector(selectIsCartOpen);
    const navigate = useNavigate();

    const goToHomepage = () => navigate('/');

    return (
        <>
            <div className="Nav-bg-color">
                <div className="flex justify-between mx-16 py-2 ">
                    <span className="text-2xl font-semibold text-white cursor-pointer"
                        onClick={goToHomepage}>Use Reducer</span>
                    <CartIcon />
                    {isCartOpen && <CartdropDown />}
                </div>
            </div>
            <Outlet />
        </>
    )
}

export default Navigation;