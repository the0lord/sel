import { ProductList } from "features/products";
import Tw from "shared/ui/dynamic/Tailwind/Tw";

const ProductsPage = () => {
    return <Tw cn="container">
        <ProductList />
    </Tw>
}

export default ProductsPage;