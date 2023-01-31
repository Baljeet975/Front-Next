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
    // localStorage.removeItem(token);
    localStorage.clear();
    sessionStorage.clear();
    // window.location.reload();
    router.push("/Login");
  };

  // useEffect(() => {
  //   userData();
  // }, []);

  // const userData = (_id) => {
  //   const token = localStorage.getItem("access_token1");

  //   var decoded = jwt_decode(token);

  //   setName(decoded);
  //   console.log("token",name)
  // };

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
                  src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp"
                  height="15"
                  alt="MDB Logo"
                  loading="lazy"
                />
              </a>
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link" href="/Homepage">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Notification
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/Properties">
                    Properties
                  </a>
                </li>
              </ul>
            </div>
            {/* <div>
              <MDBBtn
                onClick={(e) => {
                  router.push("/Login");
                }}
              >
                Login
              </MDBBtn>
            </div> */}
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
        {/* <div
    className="p-5 text-center bg-image"
    style={{
      backgroundImage: "url('https://mdbcdn.b-cdn.net/img/new/slides/041.webp')",height:"400px"}}

    
  >
    <div className="mask" style={{backgroundColor: "rgba(0, 0, 0, 0.6)"}}>
      <div className="d-flex justify-content-center align-items-center h-100">
      <div className="input-group rounded">
  <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
  <span className="input-group-text border-0" id="search-addon">
    <i className="fas fa-search"></i>
  </span>
</div>
      </div>
    </div> */}

        {/* </div> */}
      </header>
    </>
  );
};

export default Admintop;
