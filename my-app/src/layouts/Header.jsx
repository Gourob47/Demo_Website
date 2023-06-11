import React from "react";
import { FaMendeley, FaMenorah } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";
import { Link, NavLink, useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
  function ok() {
    navigate("/");
  }
  const well = {
    boxShadow: "0px 5px 8px   #E7EAE5",
  };

  const well1 = {
    height: "40px",
    width: "40px",
    padding: "5px",
   
  };

  return (
    <div className="pb-4 ">
      <div className="p-3" style={well}>
        <div className="container p-0">
          <nav className="navbar navbar-expand-lg navbar-white bg-white pb-4 pt-4 pl-0 pr-0">
            <Link to="/">
              <img
                className="img-fluid"
                width={200}
                src="/images/1.png "
                alt="Image description"
              />
            </Link>

            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span style={well1}>
                {" "}
                <AiOutlineMenu style={well1} />
              </span>
            </button>

            <div
              className="collapse navbar-collapse outline-none"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <div className="nav-link text-dark pr-2 font-weight-bold">
                    <NavLink
                      to="/"
                      style={({ isActive }) => {
                        return isActive
                          ? {
                              color: "red",
                              textDecoration: "none",
                            }
                          : { textDecoration: "none", color: "black" };
                      }}
                    >
                      Home
                    </NavLink>
                  </div>
                </li>
                <li className="nav-item ">
                  <div className="nav-link text-dark pr-2 font-weight-bold">
                    <NavLink
                      to="/privacy/policy"
                      style={({ isActive }) => {
                        return isActive
                          ? {
                              color: "red",
                              textDecoration: "none",
                            }
                          : { textDecoration: "none", color: "black" };
                      }}
                    >
                      Privacy Policy
                    </NavLink>
                  </div>
                </li>
                <li className="nav-item">
                  <div className="nav-link text-dark pr-2 font-weight-bold">
                    <NavLink
                      to="/terms/condition"
                      style={({ isActive }) => {
                        return isActive
                          ? {
                              color: "red",
                              textDecoration: "none",
                            }
                          : { textDecoration: "none", color: "black" };
                      }}
                    >
                      Terms Condition
                    </NavLink>
                  </div>
                </li>
                <li className="nav-item">
                  <div className="nav-link text-dark pr-2 font-weight-bold">
                    <NavLink
                      to="/about/us"
                      style={({ isActive }) => {
                        return isActive
                          ? {
                              color: "red",
                              textDecoration: "none",
                            }
                          : { textDecoration: "none", color: "black" };
                      }}
                    >
                      About Us
                    </NavLink>
                  </div>
                </li>
                <li className="nav-item">
                  <div className="nav-link text-dark pr-2 font-weight-bold">
                    <NavLink
                      to="/contact/us"
                      style={({ isActive }) => {
                        return isActive
                          ? {
                              color: "red",
                              textDecoration: "none",
                            }
                          : { textDecoration: "none", color: "black" };
                      }}
                    >
                      Contact Us
                    </NavLink>
                  </div>
                </li>
                <li className="nav-item">
                  <div className="nav-link text-dark pr-2 font-weight-bold">
                    <NavLink
                      to="/advertisement"
                      style={({ isActive }) => {
                        return isActive
                          ? {
                              color: "red",
                              textDecoration: "none",
                            }
                          : { textDecoration: "none", color: "black" };
                      }}
                    >
                      Advertise
                    </NavLink>
                  </div>
                </li>
              </ul>
              <button className="btn btn-danger" type="submit" onClick={ok}>
                Join Now
              </button>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
