import { PHONE_DATA } from "../../smart-phone-data";

import { useSelector } from "react-redux";

import { selectIsModalOpen } from "../../store/cart/cart.selector";

import CheckoutModal from "../../components/checkout-modal/checkout-modal";

import ProductCard from "../../components/product-card/product-acrd.component";
import './homepage.styles.scss';

const Home = () => {
    const isModalOpen = useSelector(selectIsModalOpen);

    return (
        <>
            <div className=" text-gray-900 grid grid-cols-4">
                {
                    PHONE_DATA.map((phone) => (
                        <ProductCard phone={phone} key={phone.id} />
                    ))
                }
                {
                    isModalOpen && <CheckoutModal />
                }
            </div>
        </>
    )
}

export default Home;