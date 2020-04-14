import React, { Component } from "react";
import NavTabs from "./NavTabs";
import Founders from "./Founders";
import Partners from "./Partners";
import Community from "./Community";
import Contact from "../pages/contact";


class Tabs extends Component {
  state = {
    currentPage: "Founders"
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  renderPage = () => {
    if (this.state.currentPage === "Founders") {
      return <Founders />;
    } else if (this.state.currentPage === "Partners") {
      return <Partners />;
    } else if (this.state.currentPage === "Community") {
      return <Community />;
    } else {
      return <Contact />;
    }
  };

  render() {
    return (
      <div>
        <NavTabs
          currentPage={this.state.currentPage}
          handlePageChange={this.handlePageChange}
        />
        {this.renderPage()}
      </div>
    );
  }
}

export default Tabs;