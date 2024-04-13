import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footerContent">
        <p className="copyrightText">
          © {new Date().getFullYear()} Vivid Vission. All rights reserved.
        </p>
        <p className="madeWithLove">Made with love in Kochi ❤️</p>
      </div>
    </footer>
  );
};

export default Footer;
