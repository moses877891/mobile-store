// import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { selectCartItems, selectCartTotal } from '../../store/cart/cart.selector';
import { clearAll } from '../../store/cart/cart.action'

import CheckOutItem from '../../components/checkout-item/checkout-item.component';

import './checkout.styles.scss'

const CheckOut = () => {
    const cartItems = useSelector(selectCartItems);
    const cartTotal = useSelector(selectCartTotal);


    // const navigate = useNavigate();
    const dispatch = useDispatch();

    const removeAllHandler = () => dispatch(clearAll());
    // const goToHomepage = () => navigate('/');

    return (
        <div className='my-16 mx-44 '>
            <p className='text-3xl uppercase pt-4 font-bold text-center mb-16 your-bag'>your bag</p>
            <div>
                {
                    cartItems.map((cartItem) => (
                        <CheckOutItem key={cartItem.id} cartItem={cartItem} />
                    ))
                }
            </div>
            <div className=' mt-10 border-b-2 border-color-checkout'></div>
            <div className='flex justify-between mt-2'>
                <p className=' font-medium'>Total</p>
                <p>₹{cartTotal.toLocaleString("hi-IN")}</p>
            </div>
            <div className='flex items-center justify-center text-red-600'>
                <button className=' uppercase font-medium bg-white hover:bg-red-600 hover:text-white
                 border border-red-700 rounded-md w-32 h-8 mt-10'
                    type='button' onClick={removeAllHandler}
                >Clear Cart</button>
            </div>
        </div>
    )
}

export default CheckOut;