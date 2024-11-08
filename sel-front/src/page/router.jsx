import { Navigate, Route, Routes } from "react-router-dom";
import BaseLayout from "widgets/layouts/BaseLayout";
import { HomePage } from "./home";
import { ProductsPage } from "./products";

const Router = () => {
    return <BaseLayout>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    </BaseLayout>
}
export default Router;          