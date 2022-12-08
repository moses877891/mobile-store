import { useDispatch, useSelector } from "react-redux";

import { addItemToCart } from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";

import './product.styles.scss'

const ProductCard = ({ phone }) => {
    const { name, imageUrl, price } = phone;

    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);

    const handleSubmit = () => {
        dispatch(addItemToCart(cartItems, phone));
    }

    return (
        <div className="flex flex-col items-center my-5 mx-1">
            <div className="hover:opacity-90">
                <img className="custom-image" src={imageUrl} alt={name} />
            </div>
            <p className="mt-2 font-bold">{name}</p>
            <p className="my-1">Rs.{price.toLocaleString("hi-IN")}</p>
            <button type="button" className="bg-sky-800 hover:bg-sky-900 text-white
            p-1 rounded-md hover:shadow-lg uppercase text-sm" onClick={handleSubmit}>add to card</button>
        </div>
    )
}

export default ProductCard;