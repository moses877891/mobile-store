import { useDispatch, useSelector } from "react-redux";

import { addItemToCart, removeItemFromCart, clearItemFromCart } from '../../store/cart/cart.action';
import { selectCartItems } from "../../store/cart/cart.selector";

import UpArrow from '../../assets/up-arrow-svgrepo-com.svg';
import DownArrow from '../../assets/down-arrow-svgrepo-com.svg';

const CheckOutItem = ({ cartItem }) => {
    const { imageUrl, name, price, quantity } = cartItem;

    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);

    const addItemToCartHandler = () => dispatch(addItemToCart(cartItems, cartItem));
    const removeItemFromCartHandler = () => dispatch(removeItemFromCart(cartItems, cartItem));
    const clearItemFromCartHandler = () => dispatch(clearItemFromCart(cartItems, cartItem));

    return (
        <div className="flex flex-row w-full items-center justify-between">
            <div className="flex">
                <div className=" w-14">
                    <img src={imageUrl} alt={name} />
                </div>
                <div className="flex flex-col pl-10">
                    <p className="font-medium">{name}</p>
                    <p className="my-1 text-neutral-500">₹{price.toLocaleString("hi-IN")}</p>
                    <p className=" text-cyan-600 mb-5 cursor-pointer"
                        onClick={clearItemFromCartHandler}>remove</p>
                </div>
            </div>
            <div className="flex flex-col">
                <span onClick={addItemToCartHandler} className="scale-125 cursor-pointer">
                    <img src={UpArrow} alt={UpArrow} />
                </span>
                <p>{quantity}</p>
                <span onClick={removeItemFromCartHandler} className="scale-125 cursor-pointer">
                    <img src={DownArrow} alt={DownArrow} />
                </span>
            </div>
        </div>
    )
}

export default CheckOutItem;