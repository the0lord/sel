// 
import { Navigate, Route, Routes } from "react-router-dom";
import CreateNeedPage from "./ui/CreateNeedPage";
import NeedsPage from "./ui/NeedsPage";

const NeedsRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<NeedsPage />} />
            <Route path="/create" element={<CreateNeedPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    );
};

export default NeedsRouter;
