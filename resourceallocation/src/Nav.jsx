import { Link } from 'react-router-dom'
import React from "react"; 
const Nav =() => {

    return(

        <nav className="navbar navbar-expand-lg navbar-light bg0light">
            <ul className="navbar-nav me-auto mb-3 mb-lg-0">
                <li className="nav-item">
                    <Link className='nav-link' to="/">
                    Home
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className='nav-item' to="/GroupedTeamMembers">
                        Teams
                    </Link>
                </li>
            </ul>
            
        </nav>
    )
}
export default Nav;