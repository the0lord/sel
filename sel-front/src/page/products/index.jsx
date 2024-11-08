// export { default as ProductsPage } from "./ui/ProductsPage";
import { Navigate, Route, Routes } from "react-router-dom";
import CreateProductPage from "./ui/CreateProductPage";
import ProductsPage from "./ui/ProductsPage";

const ProductsRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<ProductsPage />} />
            <Route path="/create" element={<CreateProductPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    );
};

export default ProductsRouter;
