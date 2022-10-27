import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
      <div className="grid grid-flow-col gap-2">
        <Link to="/tutorials" className="link link-hover">
          Tutorial
        </Link>
        <Link to="/faq" className="link link-hover">
          FAQ
        </Link>
        <Link to="/blog" className="link link-hover">
          Blog
        </Link>
      </div>
      <div></div>
      <div>
        <p>Copyright © 2022 - Vehicle Artisan All right reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
