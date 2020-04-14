import React from "react";

function NavTabs(props) {
  return (
      <div className="tabsBar">
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
    <style jsx> {`
        .tabsBar {
            text-align: center;
            width: 100vw;
        }
        .tabsBar ul {
            display: flex;
            flex-direction: row;

        }
        .tabsBar li {
            width: 50%;
            list-style: none;
        }
        .nav-item a {
            width: 100%;
            font-size: 1.5rem;
            text-decoration: none;
            color: black;
        }
    `}

    </style>
    </div>
  );
}

export default NavTabs;
