import { Navigate, Route, Routes } from "react-router-dom";
import BaseLayout from "widgets/layouts/BaseLayout";
import { HomePage } from "./home";
import { UsersPage } from './users'
import { FarmerStackPage } from './farmerStack'
import { ProductsPage } from "./products";
import { NeedsPage } from "./needs";

const Router = () => {
    return <BaseLayout>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/users/*" element={<UsersPage/>}/>
            <Route path="/stack"element={<FarmerStackPage/>}/>
            <Route path="/needs" element={<NeedsPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    </BaseLayout>
}
export default Router;