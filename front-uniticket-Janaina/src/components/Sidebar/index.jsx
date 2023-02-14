import React from "react";
import "../../styles/sidebar/index.scss";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import SideNav, { NavItem, NavIcon, NavText } from "@trendmicro/react-sidenav";
import { FaHome, FaUtensils, FaHamburger, FaSignOutAlt } from "react-icons/fa";
import { logout } from "../../app/utils/api";

export default function Sidebar(props) {
  const defaultSelected = window.location.pathname.split("/").pop();

  const handleLogout = async () => {
    try {
      await logout();
      localStorage.clear();
      window.location = "/login";
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <SideNav
      onToggle={open => {
        props.sideNavOpen(open);
      }}
      expanded={props.expanded}
      className="bg-primary"
    >
      <SideNav.Toggle className="sidebar-icons" />
      <SideNav.Nav defaultSelected={defaultSelected}>
        <NavItem
          onSelect={() => {
            window.location = "/home";
          }}
          eventKey="home"
        >
          <NavIcon>
            <FaHome className="sidebar-icons text-white" />
          </NavIcon>
          <NavText>Home</NavText>
        </NavItem>
        <NavItem
          onSelect={() => {
            window.location = "/cardapio";
          }}
          eventKey="cardapio"
        >
          <NavIcon>
            <FaUtensils className="sidebar-icons text-white" />
          </NavIcon>
          <NavText>Cardápio</NavText>
        </NavItem>
        {localStorage.getItem("role") === "admin" ? (
          <NavItem
            onSelect={() => {
              window.location = "/ingredientes";
            }}
            eventKey="ingredientes"
          >
            <NavIcon>
              <FaHamburger className="sidebar-icons text-white" />
            </NavIcon>
            <NavText>Ingredientes</NavText>
          </NavItem>
        ) : (
          <></>
        )}
        <NavItem onSelect={() => handleLogout()} eventKey="sair">
          <NavIcon>
            <FaSignOutAlt className="sidebar-icons text-white" />
          </NavIcon>
          <NavText>Sair</NavText>
        </NavItem>
      </SideNav.Nav>
    </SideNav>
  );
}
