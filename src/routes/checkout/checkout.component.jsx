import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { selectCartItems, selectCartTotal } from '../../store/cart/cart.selector';
import { clearAll } from '../../store/cart/cart.action'

import CheckOutItem from '../../components/checkout-item/checkout-item.component';

const CheckOut = () => {
    const cartItems = useSelector(selectCartItems);
    const cartTotal = useSelector(selectCartTotal);


    const navigate = useNavigate();
    const dispatch = useDispatch();

    const removeAllHandler = () => dispatch(clearAll());
    const goToHomepage = () => navigate('/');

    return (
        <div className=' my-12 mx-32'>
            <span className='border border-black  px-3 rounded-md pb-1 cursor-pointer'
                onClick={goToHomepage}>
                <span className=' text-xl'>
                    ←
                </span>
            </span>
            <p className='text-2xl uppercase text-center pt-4 font-extrabold mb-6'>your bag</p>
            <div>
                {
                    cartItems.map((cartItem) => (
                        <CheckOutItem key={cartItem.id} cartItem={cartItem} />
                    ))
                }
            </div>
            <div className=' mt-10 border-b-2 border-cyan-600'></div>
            <div className='flex justify-between mt-2'>
                <p className=' font-medium'>Total</p>
                <p>₹{cartTotal.toLocaleString("hi-IN")}</p>
            </div>
            <div className='flex items-center justify-center text-red-600'>
                <button className=' uppercase bg-white hover:bg-red-600 hover:text-white
                p-2 border border-red-700 rounded-md w-40 h-10 mt-10'
                    type='button' onClick={removeAllHandler}
                >Clear Cart</button>
            </div>
        </div>
    )
}

export default CheckOut;