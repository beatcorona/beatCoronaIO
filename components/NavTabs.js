import React from "react";

function NavTabs(props) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
          href="#founders"
          onClick={() => props.handlePageChange("Founders")}
          className={props.currentPage === "Founders" ? "nav-link active" : "nav-link"}
        >
          Founders
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#partners"
          onClick={() => props.handlePageChange("Partners")}
          className={props.currentPage === "Partners" ? "nav-link active" : "nav-link"}
        >
          Partners
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#community"
          onClick={() => props.handlePageChange("Community")}
          className={props.currentPage === "Community" ? "nav-link active" : "nav-link"}
        >
          Community
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;
