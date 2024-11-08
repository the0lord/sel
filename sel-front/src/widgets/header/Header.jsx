import { LogoutButton } from "features/auth/logout";
import React from "react";
import logo from "assets/images/logoGateway.jpg";

const Header = ({ children }) => {
    return <div className="max-w-full">
        <nav className="navbar sticky top-0 bg-white" id="navbar">
            <div className="flex container">
                <a className="navbar-brand" href="/">
                    <img width="30" height="45" alt="company logo" src={logo} />
                    <span>gateway</span>
                </a>
                <div className={'inline-block show'} >
                    <ul className="col-auto">
                        {/* <li>
                        <a href="#" className="nav-link font-semibold">white list</a>
                    </li>
                    <li>
                        <NavLink className="nav-link font-semibold" to="/sanctions-legal">sanctions legal</NavLink>
                    </li>
                    <li>
                        <NavLink className="nav-link font-semibold" to="/sanctions-individuals">sanctions individuals</NavLink>
                    </li>
                    <li>
                        <a href="#" className="nav-link font-semibold">logs</a>
                    </li> */}
                        <li>
                            <LogoutButton />
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        {children}
    </div>
}

export default Header;