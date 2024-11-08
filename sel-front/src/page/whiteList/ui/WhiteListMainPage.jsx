import { Link } from "react-router-dom";

const WhiteListMainPage = () => {

    return <div className="container">
        <Link to="/white-list/WhiteListPersonsPage" className="btn btn-primary m-2">
            Белый лист санкционированные лица
        </Link>
        <Link to="/white-list/WhiteListOrganisationsPage" className="btn btn-primary m-2">
            Белый лист организации
        </Link>
    </div>
}

export default WhiteListMainPage;