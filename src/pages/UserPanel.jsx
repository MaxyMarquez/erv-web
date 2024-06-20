import React from "react";
import SideBarNav from "@/components/SideBarNav";
import UserOrders from "@/components/UserOrders";

import "@/styles/UserPanel.css";
import { useState } from "react";
import { Outlet } from "react-router-dom";

const UserPanel = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div
      className={`user-panel__container ${navOpen ? "user-panel__open" : ""}`}
    >
      <div className="user-pannel__nav">
        <SideBarNav navOpen={navOpen} setNavOpen={setNavOpen} />
      </div>
      <div className="user-pannel__content">
        <Outlet />
      </div>
    </div>
  );
};

export default UserPanel;
