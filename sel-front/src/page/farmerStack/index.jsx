// 
import { Navigate, Route, Routes } from "react-router-dom";
import CreateStackPage from "./ui/CreateStackPage";
import FarmerStackPage from "./ui/FarmerStackPage";

const StacksRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<FarmerStackPage />} />
            <Route path="/create" element={<CreateStackPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    );
};

export default StacksRouter;
