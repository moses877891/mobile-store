import { PHONE_DATA } from "../../smart-phone-data";

import ProductCard from "../../components/product-card/product-acrd.component";
import './homepage.styles.scss';

const Home = () => {
    return (
        <div className=" text-gray-900 grid grid-cols-4">
            {
                PHONE_DATA.map((phone) => (
                    <ProductCard phone={phone} key={phone.id} />
                ))
            }
        </div>
    )
}

export default Home;