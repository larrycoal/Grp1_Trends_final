import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./index.css"
const header_footer = ({ children }) => {
  return (
    <>
      <header>
        <nav>
          <h2 className="logo">ShopEasy</h2>
          <ul className="navigation">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </header>
      <div className="outlet">
        <Outlet />
      </div>
      <footer>
        <div class="footerLogo">
          <div>ShopHova</div>
          <div>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-twitter"></i>
          </div>
        </div>
        <div class="disclaimer">
          Copyright &copy; 2022 | ShopHova | Group Project Conestoga
        </div>
      </footer>
    </>
  );
};

export default header_footer;