import React from "react";
import "../styles/Navbar.css";

// By importing the Navbar.css file, it is added to the DOM whenever this component loads
const styles = {
  navbarStyle: {
    background: "green"
  },
    anchorStyle: {
      float: "right"
  }
};

const Navbar = () => (
  <nav style={styles.navbarStyle} className="navbar">
    <a style={styles.anchorStyle} href="/">Welcome</a>
  </nav>
);

export default Navbar;
