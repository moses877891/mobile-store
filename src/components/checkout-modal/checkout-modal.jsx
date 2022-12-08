import { useSelector, useDispatch } from 'react-redux';

import { selectCartItems, selectCartTotal, selectIsModalOpen } from '../../store/cart/cart.selector';
import { clearAll, setIsModalOpen } from '../../store/cart/cart.action';

import CheckOutItem from '../checkout-item/checkout-item.component';
import './checkout-modal.styles.scss'

const CheckoutModal = () => {
    const cartItems = useSelector(selectCartItems);
    const cartTotal = useSelector(selectCartTotal);
    const isModalOpen = useSelector(selectIsModalOpen);

    // const navigate = useNavigate();
    const dispatch = useDispatch();

    const closeModalHandler = () => dispatch(setIsModalOpen(!isModalOpen))

    const removeAllHandler = () => dispatch(clearAll());

    return (
        <div
            className="justify-center flex overflow-x-scroll overflow-y-auto 
            fixed inset-0 z-50 outline-none focus:outline-none "
        >
            <div className="relative w-full my-6 mx-auto max-w-3xl ">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col mx-10 bg-white outline-none focus:outline-none">
                    {/*header*/}
                    <div className="flex justify-between pt-5 mb-5 border-solid mx-6
                     border-slate-200 rounded-t">
                        <p className='text-3xl uppercase font-bold text-center your-bag'>your bag</p>
                        <span className="bg-transparent text-black h-6 w-6 
                                text-3xl block outline-none cursor-pointer" onClick={closeModalHandler}>
                            ×
                        </span>
                    </div>
                    {/*body*/}
                    <div className='my-1 mx-14'>
                        <div>
                            {
                                cartItems.map((cartItem) => (
                                    <CheckOutItem key={cartItem.id} cartItem={cartItem} />
                                ))
                            }
                        </div>
                        {/*footer*/}
                        <div className=' mt-10 border-b-2 border-color-checkout'></div>
                        <div className='flex justify-between mt-2'>
                            <p className=' font-medium'>Total</p>
                            <p>₹{cartTotal.toLocaleString("hi-IN")}</p>
                        </div>
                        <div className='flex items-center justify-center text-red-600'>
                            <button className=' uppercase font-medium bg-white hover:bg-red-600 hover:text-white
                 border border-red-700 rounded-md w-32 h-8 my-6'
                                type='button' onClick={removeAllHandler}
                            >Clear Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CheckoutModal;