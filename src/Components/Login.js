import React, { useEffect } from 'react';
import { Link,BrowserRouter,Route,Routes, NavLink } from 'react-router-dom';
import Dashboard from './Dashboard';

function Login() {
  useEffect(() => {
    document.title = "Employee Managment System | Login";
  });
  return (
    <BrowserRouter>
      <div className="page-wraper">
        <div className="browse-job login-style3">
          {/* =============== */}
          <div
            className="bg-img-fix overflow-hidden"
            style={{ background: "#fff url(images/background/bg6.jpg)", height: "100vh" }}
          >
            <div className="row gx-0">
              <div className="col-xl-4 col-lg-5 col-md-6 col-sm-12 vh-100 bg-white ">
                <div
                  id="mCSB_1"
                  className="mCustomScrollBox mCS-light mCSB_vertical mCSB_inside"
                  style={{ maxHeight: 653 }}
                  tabIndex={0}
                >
                  <div
                    id="mCSB_1_container"
                    className="mCSB_container"
                    style={{ position: "relative", top: 0, left: 0 }}
                    dir="ltr"
                  >
                    <div className="login-form style-2">
                      <div className="card-body">
                        <div className="logo-header">
                          <Link to="/Dashboard" className="logo">
                            <img
                              src="images/logo/logo-full.png"
                              alt=""
                              className="width-230 light-logo"
                            />
                          </Link>
                      
                          <Link to="/Dashboard" className="logo">
                            <img
                              src="images/logo/logofull-white.png"
                              alt=""
                              className="width-230 dark-logo"
                            />
                          </Link>
                          
                        </div>
                        <nav>
                          <div
                            className="nav nav-tabs border-bottom-0"
                            id="nav-tab"
                            role="tablist"
                          >
                            <div className="tab-content w-100" id="nav-tabContent">
                              <div
                                className="tab-pane fade show active"
                                id="nav-personal"
                                role="tabpanel"
                                aria-labelledby="nav-personal-tab"
                              >
                                <form action="index.html" className=" dz-form pb-3">
                                  <h3 className="form-title m-t0">Sign In</h3>
                                  <div className="dz-separator-outer m-b5">
                                    <div className="dz-separator bg-primary style-liner" />
                                  </div>
                                  <p>Enter your e-mail address and your password. </p>
                                  <div className="form-group mb-3">
                                    <input
                                      type="email"
                                      className="form-control"
                                      defaultValue="hello@example.com"
                                    />
                                  </div>
                                  <div className="form-group mb-3">
                                    <input
                                      type="password"
                                      className="form-control"
                                      defaultValue="Password"
                                    />
                                  </div>
                                  <div className="form-group mb-5 forget-main">
                                    <span className="form-check d-inline-block">
                                      <input
                                        type="checkbox"
                                        className="form-check-input"
                                        id="check1"
                                        name="example1"
                                      />
                                      <label
                                        className="form-check-label"
                                        htmlFor="check1"
                                      >
                                        Remember me
                                      </label>
                                    </span>
                                    <span
                                      className="text-right"
                                      style={{ marginLeft: 135 }}
                                    >
                                      <Link
                                        to="#"
                                        id="nav-forget-tab"
                                        data-bs-toggle="tab"
                                        data-bs-target="#nav-forget"
                                        role="tab"
                                        aria-controls="nav-forget"
                                        aria-selected="false"
                                        className="text-primary"
                                      >
                                        Forgot Password ?
                                      </Link>
                                    </span>
                                  </div>
                                  <div className="text-center bottom">
                                    <NavLink
                                      to="/Dashboard"
                                      className="btn btn-primary button-md btn-block"
                                    >
                                      Sign In
                                    </NavLink>
                                  </div>
                                </form>
                                <div className="text-center bottom">
                                  <Link
                                    className="text-primary"
                                    id="nav-sign-tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#nav-sign"
                                    type="button"
                                    role="tab"
                                    aria-controls="nav-sign"
                                    aria-selected="false"
                                  >
                                    Create an account
                                  </Link>
                                </div>
                              </div>
                              <div
                                className="tab-pane fade"
                                id="nav-forget"
                                role="tabpanel"
                                aria-labelledby="nav-forget-tab"
                              >
                                <form className="dz-form">
                                  <h3 className="form-title m-t0">Forget Password ?</h3>
                                  <div className="dz-separator-outer m-b5">
                                    <div className="dz-separator bg-primary style-liner" />
                                  </div>
                                  <p>
                                    Enter your e-mail address below to reset your
                                    password.
                                  </p>
                                  <div className="form-group mb-4">
                                    <input
                                      name="dzName"
                                      required=""
                                      className="form-control"
                                      placeholder="Email Address"
                                      type="text"
                                    />
                                  </div>
                                  <div className="form-group clearfix text-left">
                                    <button
                                      className=" active btn btn-primary"
                                      id="nav-personal-tab"
                                      data-bs-toggle="tab"
                                      data-bs-target="#nav-personal"
                                      type="button"
                                      role="tab"
                                      aria-controls="nav-personal"
                                      aria-selected="true"
                                    >
                                      Back
                                    </button>
                                    <button className="btn btn-primary float-end">
                                      Submit
                                    </button>
                                  </div>
                                </form>
                              </div>
                              <div
                                className="tab-pane fade"
                                id="nav-sign"
                                role="tabpanel"
                                aria-labelledby="nav-sign-tab"
                              >
                                <form className="dz-form py-2">
                                  <h3 className="form-title">Sign Up</h3>
                                  <div className="dz-separator-outer m-b5">
                                    <div className="dz-separator bg-primary style-liner" />
                                  </div>
                                  <p>Enter your personal details below: </p>
                                  <div className="form-group mt-3">
                                    <input
                                      name="dzName"
                                      required=""
                                      className="form-control"
                                      placeholder="Full Name"
                                      type="text"
                                    />
                                  </div>
                                  <div className="form-group mt-3">
                                    <input
                                      name="dzName"
                                      required=""
                                      className="form-control"
                                      placeholder="User Name"
                                      type="text"
                                    />
                                  </div>
                                  <div className="form-group mt-3">
                                    <input
                                      name="dzName"
                                      required=""
                                      className="form-control"
                                      placeholder="Email Address"
                                      type="text"
                                    />
                                  </div>
                                  <div className="form-group mt-3">
                                    <input
                                      name="dzName"
                                      required=""
                                      className="form-control"
                                      placeholder="Password"
                                      type="password"
                                    />
                                  </div>
                                  <div className="form-group mt-3 mb-3">
                                    <input
                                      name="dzName"
                                      required=""
                                      className="form-control"
                                      placeholder="Confirm Password"
                                      type="password"
                                    />
                                  </div>
                                  <div className="mb-3">
                                    <span className="form-check float-start me-2 ">
                                      <input
                                        type="checkbox"
                                        className="form-check-input"
                                        id="check2"
                                        name="example1"
                                      />
                                      <label
                                        className="form-check-label d-unset"
                                        htmlFor="check2"
                                      >
                                        I agree to the
                                      </label>
                                    </span>
                                    <label>
                                      <Link to="#">Terms of Service </Link>&amp;{" "}
                                      <Link to="#">Privacy Policy</Link>
                                    </label>
                                  </div>
                                  <div className="form-group clearfix text-left">
                                    <button
                                      className="btn btn-primary outline gray"
                                      data-bs-toggle="tab"
                                      data-bs-target="#nav-personal"
                                      type="button"
                                      role="tab"
                                      aria-controls="nav-personal"
                                      aria-selected="true"
                                    >
                                      Back
                                    </button>
                                    <button className="btn btn-primary float-end">
                                      Submit
                                    </button>
                                  </div>
                                </form>
                              </div>
                            </div>
                          </div>
                        </nav>
                      </div>
                      <div className="card-footer">
                        <div className=" bottom-footer clearfix m-t10 m-b20 row text-center">
                          <div className="col-lg-12 text-center">
                            <span>
                              © Copyright by <span className="heart" />
                              <Link to="https://onebigbit.com/" target="_blank">
                                OneBigBit Technologies Private Limited
                              </Link>
                              <br /> All rights reserved.
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    id="mCSB_1_scrollbar_vertical"
                    className="mCSB_scrollTools mCSB_1_scrollbar mCS-light mCSB_scrollTools_vertical"
                    style={{ display: "block" }}
                  >
                    <div className="mCSB_draggerContainer">
                      <div
                        id="mCSB_1_dragger_vertical"
                        className="mCSB_dragger"
                        style={{
                          position: "absolute",
                          minHeight: 0,
                          display: "block",
                          height: 652,
                          maxHeight: 643,
                          top: 0
                        }}
                      >
                        <div className="mCSB_dragger_bar" style={{ lineHeight: 0 }} />
                        <div className="mCSB_draggerRail" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default Login;
