import { Outlet, useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";

import { selectIsCartOpen } from '../../store/cart/cart.selector'

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartdropDown from "../../components/cart-dropdown/cart-dropdown.component";

const Navigation = () => {
    const isCartOpen = useSelector(selectIsCartOpen);
    const navigate = useNavigate();

    const goToHomepage = () => navigate('/');

    return (
        <>
            <div className=" bg-sky-700">
                <div className="flex justify-between mx-4 py-2">
                    <span className="cursor-pointer scale-150" onClick={goToHomepage}>
                        🤳
                    </span>
                    <span className="text-2xl font-semibold text-white cursor-pointer"
                        onClick={goToHomepage}>Phone store</span>
                    <CartIcon />
                    {isCartOpen && <CartdropDown />}
                </div>
            </div>
            <Outlet />
        </>
    )
}

export default Navigation;