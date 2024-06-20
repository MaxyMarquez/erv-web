import React from "react";

import { VscMenu, VscChromeClose } from "react-icons/vsc";
import {
  PiUserCircleThin,
  PiListDashesThin,
  PiBagSimpleThin,
} from "react-icons/pi";

import "@/styles/SideBarNav.css";
import { NavLink } from "react-router-dom";

const SideBarNav = ({ navOpen, setNavOpen, changeComponent }) => {
  return (
    <div className={`sidebar-nav__container ${navOpen ? "sidebar-open" : ""}`}>
      <header className="sidebar-nav__header">
        <button
          className="sidebar-nav__header__button"
          onClick={() => setNavOpen((prev) => !prev)}
        >
          {navOpen ? (
            <VscChromeClose className="sidebar-nav__icon" />
          ) : (
            <VscMenu className="sidebar-nav__icon" />
          )}
        </button>
        <h1
          className={`sidebar-nav__header__title ${
            navOpen ? "sidebar-active" : ""
          }`}
        >
          Mi Cuenta
        </h1>
      </header>

      <div>
        <ul className="sidebar-nav__ul">
          <li className="sidebar-nav__li">
            <NavLink
              to="/panel-de-usuario/cuenta"
              className={"sidebar-nav__link"}
            >
              <span className="sidebar-nav__icon__container">
                <PiUserCircleThin className="sidebar-nav__icon" />
              </span>
              <p className="sidebar-nav__p">Mi Cuenta</p>
            </NavLink>
          </li>

          <li className="sidebar-nav__li">
            <NavLink
              to="/panel-de-usuario/pedidos"
              className="sidebar-nav__link"
            >
              <span className="sidebar-nav__icon__container">
                <PiListDashesThin className="sidebar-nav__icon" />
              </span>
              <p className="sidebar-nav__p">Mis Pedidos</p>
            </NavLink>
          </li>

          <li className="sidebar-nav__li">
            <NavLink to="/" className={"sidebar-nav__link"}>
              <span className="sidebar-nav__icon__container">
                <PiBagSimpleThin className="sidebar-nav__icon" />
              </span>
              <p className="sidebar-nav__p">Mis Compras</p>
            </NavLink>
          </li>
        </ul>
      </div>

      <div>Salir</div>
    </div>
  );
};

export default SideBarNav;
