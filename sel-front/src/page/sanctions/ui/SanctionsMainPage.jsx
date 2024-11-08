import { Link } from "react-router-dom";

const SanctionsMainPage = () => {

    return <div className="container">
        <Link to="/sanctions/kyrgyz/organizations" className="btn btn-primary m-2">
            Санкционированнные организации Кыргызстана
        </Link>
        <Link to="/sanctions/kyrgyz/individuals" className="btn btn-primary m-2">
            Санкционированнные лица Кыргызстана
        </Link>
        <Link to="/sanctions/un/organizations" className="btn btn-primary m-2">
            Санкционированнные организации ООН
        </Link>
        <Link to="/sanctions/un/individuals" className="btn btn-primary m-2">
            Санкционированнные лица ООН
        </Link>
    </div>
}

export default SanctionsMainPage;