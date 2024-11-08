import { useDispatch } from "react-redux";
import { setToken } from "shared/store/reducer/auth.reducer";

const LogoutButton = () => {
    const dispatch = useDispatch();
    const logOut = () => {
        dispatch(setToken(""));
    }
    return <a className="nav-link btn btn-primary" onClick={logOut}>log out</a>
}

export default LogoutButton;