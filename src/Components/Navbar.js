import React from "react";
import {
  Nav,
  NavLogo,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavElement";

export const Navbar = () => {
    return (
        <>
           <Nav sticky>
            <NavLogo to="/">
                Logo
            </NavLogo>
            <Bars />

            <NavMenu>
                <NavLink 
                  to="/"
                  activeStyle={{ color:'black' }}
                >
                    Home
                </NavLink>

                <NavLink 
                  to="/addPost"
                  activeStyle={{ color: 'black' }}
                >
                    Add Post
                </NavLink>
            </NavMenu>
           </Nav> 
        </>
    );
};
