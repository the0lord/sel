import ModuleLayout from "features/system/ModuleLayout/ModuleLayout";
import { Navigate, Route, Routes } from "react-router-dom";
import WhiteListMainPage from "page/whiteList/ui/WhiteListMainPage";
// import WhiteListPersons from "features/whiteList/ui/WhiteListPersons";
// import WhiteListOrganisations from "../../features//whiteList/ui/WhiteListOrganisations";
import WhiteListOrganisationsPage from "./ui/WhiteListOrganisationsPage";
import WhiteListPersonsPage from "./ui/WhiteListPersonsPage";

const WhiteListRouter = () => {

    return <div>
        <ModuleLayout >
            <Routes>
                <Route path="/" element={<WhiteListMainPage />} />
                <Route path="/WhiteListOrganisationsPage" element={<WhiteListOrganisationsPage />} />
                <Route path="/WhiteListPersonsPage" element={<WhiteListPersonsPage />} />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </ModuleLayout>
    </div>;
}

export default WhiteListRouter;     