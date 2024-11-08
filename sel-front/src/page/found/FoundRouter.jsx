import ModuleLayout from "features/system/ModuleLayout/ModuleLayout";
import { Navigate, Route, Routes } from "react-router-dom";
import FoundMainPage from "./ui/FoundMainPage";
// import FoundOrganization from "features/found/FoundOrganization";
// import FoundPerson from "../../features/found/FoundPerson";
import FoundOrganizationPage from "./ui/FoundOrganizationPage";
import FoundPersonPage from "./ui/FoundPersonPage";

const FoundRouter = () => {

    return <div>
        <ModuleLayout >
            <Routes>
                <Route path="/" element={<FoundMainPage />} />
                <Route path="/FoundPersonPage" element={<FoundPersonPage />} />
                <Route path="/FoundOrganizationPage" element={<FoundOrganizationPage />} />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </ModuleLayout>
    </div>;
}

export default FoundRouter;     