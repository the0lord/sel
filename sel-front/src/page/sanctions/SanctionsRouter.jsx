import ModuleLayout from "features/system/ModuleLayout/ModuleLayout";
import { Navigate, Route, Routes } from "react-router-dom";
import SanctionsKyrgyzIndividualsPage from "./ui/SanctionsKyrgyzIndividualsPage";
import SanctionsKyrgyzOrganizationPage from "./ui/SanctionsKyrgyzOrganizationPage";
import SanctionsMainPage from "./ui/SanctionsMainPage";
import SanctionsUnIndividualsPage from "./ui/SanctionsUnIndividualsPage";
import SanctionsUnOrganiztionsPage from "./ui/SanctionsUnOrganiztionsPage";


const SanctionsRouter = () => {

    return <div>
        <ModuleLayout >
            <Routes>
                <Route path="/" element={<SanctionsMainPage />} />
                <Route path="/kyrgyz/organizations" element={<SanctionsKyrgyzOrganizationPage />} />
                <Route path="/kyrgyz/individuals" element={<SanctionsKyrgyzIndividualsPage />} />
                <Route path="/un/organizations" element={<SanctionsUnOrganiztionsPage />} />
                <Route path="/un/individuals" element={<SanctionsUnIndividualsPage />} />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </ModuleLayout>
    </div>;
}

export default SanctionsRouter;