import React from "react";
import "../screens/crm.css";

const Header = ({ title = "Dashboard" }) => {
  return (
    <div className="header">
      <h2>{title}</h2>
      <div className="header-right">
        {/* <input type="text" placeholder="🔍 Search..." className="header-search" /> */}
        <div className="user-profile">
          {/* <img
            src="https://ui-avatars.com/api/?name=Admin+User&background=6c5ce7&color=fff"
            alt="user"
            className="user-avatar"
          /> */}
          {/* <span className="user-name"></span> */}
          <button className="logout-btn">Logout</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
