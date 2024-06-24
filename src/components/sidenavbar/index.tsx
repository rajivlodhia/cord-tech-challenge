import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import Arrow from "../../images/arrow-icon.png";
import SearchWhite from "../../images/search-icon-white.png";

import * as colors from "../../colors";
// import { useState } from "react";

const SideNavBar = () => {
    // const [isSidebarActive, setIsSidebarActive] = useState(false);

    return (
        <SideNavBarCont>
            {/* Implement a hamburger icon slide in effect for mobile devices */}
            <SideNavMainLink
                className="menu_nav_link main_nav_link"
                to="/"
                // activeClassName="active"
                // exact
            >
                Wesley
                <NavIcon src={Arrow} alt="Down arrow icon" />
            </SideNavMainLink>
            <SideNavMainLink
                className="menu_nav_link"
                to="/discover"
                // activeClassName="active"
            >
                Discover
                <NavIcon
                    src={SearchWhite}
                    alt="Search icon"
                    width={28}
                    height={28}
                ></NavIcon>
            </SideNavMainLink>

            <SideNavHeader>
                <HeaderText>Watched</HeaderText>
            </SideNavHeader>
            <NavLink
                className="menu_nav_link"
                to="/watched/movies"
                // activeClassName="active"
            >
                Movies
            </NavLink>
            <NavLink
                className="menu_nav_link"
                to="/watched/tv-shows"
                // activeClassName="active"
            >
                Tv Shows
            </NavLink>

            <SideNavHeader>
                <HeaderText>Saved</HeaderText>
            </SideNavHeader>
            <NavLink
                className="menu_nav_link"
                to="/saved/movies"
                // activeClassName="active"
            >
                Movies
            </NavLink>
            <NavLink
                className="menu_nav_link"
                to="/saved/tv-shows"
                // activeClassName="active"
            >
                TV Shows
            </NavLink>
        </SideNavBarCont>
    );
};

export default SideNavBar;

const SideNavBarCont = styled.div`
    position: fixed;
    z-index: 9;
    width: 280px;
    height: 100%;
    background-color: ${colors.sideNavBar};
`;

const SideNavMainLink = styled(Link)`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 25px 35px;
    font-size: 1.6em;
    font-weight: 700;
    color: white;

    &[aria-current="page"] {
        background-color: ${colors.primaryColor};
    }
`;

const NavIcon = styled.img``;

const SideNavHeader = styled.p`
    color: #fff;
    font-size: 1.6em;
    margin-left: 35px;
    margin-bottom: 15px;
    padding: 25px 0 15px 0;
    border-bottom: 2px solid ${colors.fontColor};
`;

const HeaderText = styled.div``;

const NavLink = styled(Link)`
    font-size: 1.1em;
    display: block;
    color: #fff;
    padding: 5px 0 5px 35px;

    &:hover {
        background-color: ${colors.sideNavBarHover};
    }
`;
