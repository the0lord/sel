import { Navigate, Route, Routes } from "react-router-dom";
import BaseLayout from "widgets/layouts/BaseLayout";
import { HomePage } from "./home";
import StacksRouter from './farmerStack'
import ProductsRouter from "./products";
import NeedsRouter  from "./needs";
import UsersRouter from "./users";

const Router = () => {
    return <BaseLayout>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products/*" element={<ProductsRouter />} />
            <Route path="/users/*" element={<UsersRouter />}/>
            <Route path="/stack/*"element={<StacksRouter/>}/>
            <Route path="/needs/*" element={<NeedsRouter />} />
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    </BaseLayout>
}
export default Router;