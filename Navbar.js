import { NavLink } from "react-router-dom";
function Navbar() {
    return (
        <nav>
            <h1>
                IMS
            </h1>
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/About">About</NavLink>
                </li>
            </ul>
        </nav>

    );
}

export default Navbar;