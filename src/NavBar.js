import react from "react";
import {NavLink} from "react-router-dom"

function NavBar(){
        return(
        <div>
            <NavLink to="/" exact style={linkStyles}
            activeStyle={{background:"darkblue",}}>
            About
            </NavLink>
            <NavLink to="/login"
            exact
            style={linkStyles}
            activeStyle={{background:darkblue,}}>
            Login
            </NavLink>
        </div>
        )
    }
export default NavBar;
