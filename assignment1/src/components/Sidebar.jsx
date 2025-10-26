// Sidebar.jsx
import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <aside className="sidebar bg-white border-end">
      <div className="p-4">
        {/* Updated Logo */}
        <div className="logo d-flex align-items-center gap-2">
          <div className="logo-mark">
            <div className="play-btn">▶</div>
          </div>
          <div className="logo-text">EazyPayouts</div>
        </div>

        {/* Sidebar menu items */}
        <div className="sidebar-items mt-4">
          <ul className="list-unstyled">
            <li>Dashboard</li>
            <li>Transactions</li>
            <li>Settings</li>
            <li>Profile</li>
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
