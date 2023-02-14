import React, { useState } from "react";
import {
  MDBDropdown,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBDropdownItem,
  MDBBtn,
} from "mdb-react-ui-kit";
import { useRouter } from "next/router";
import jwt_decode from "jwt-decode";

const Admintop = () => {
  const router = useRouter();
  const [name, setName] = useState("");

  const logout = (e) => {
    e.preventDefault();
    console.log("Logout");
    localStorage.clear();
    sessionStorage.clear();

    router.push("/");
  };

  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-mdb-toggle="collapse"
              data-mdb-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fas fa-bars"></i>
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <a className="navbar-brand mt-2 mt-lg-0" href="#">
                <img
                  src="/ebs.png"
                  height="30"
                  // alt="MDB Logo"
                  loading="lazy"
                />
              </a>
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link" href="/components">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Notification
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Properties
                  </a>
                </li>
              </ul>
            </div>

            <MDBDropdown>
              <MDBDropdownToggle>Settings</MDBDropdownToggle>
              <MDBDropdownMenu>
                <MDBDropdownItem link onClick={logout}>
                  SignOut
                </MDBDropdownItem>
                <MDBDropdownItem link>Another action</MDBDropdownItem>
                <MDBDropdownItem link>Something else here</MDBDropdownItem>
              </MDBDropdownMenu>
            </MDBDropdown>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Admintop;
