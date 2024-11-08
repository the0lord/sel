import { Link } from "react-router-dom";

const FoundMainPage = () => {

    return <div className="container">
        <Link to="/login/FoundPersonPage" className="btn btn-primary m-2">
            Найденные люди
        </Link>
        <Link to="/login/FoundOrganizationPage" className="btn btn-primary m-2">
            Найденные организации
        </Link>
    </div>
}

export default FoundMainPage;