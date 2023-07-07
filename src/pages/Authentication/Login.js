import PropTypes from "prop-types"
import React, { useState } from "react"
import "./logincss.css"

import {
  Row,
  Col,
  CardBody,
  Card,
  Alert,
  Container,
  Form,
  Input,
  FormFeedback,
  Label,
  Button,
  Spinner,
} from "reactstrap"

import BG from "../../assets/images/BG.png"
import Logo from "../../assets/images/Logo.png"
import ill from "../../assets/images/Illustration.png"

//redux
import { useSelector, useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import withRouter from "../../components/Common/withRouter"

// Formik validation
import * as Yup from "yup"
import { useFormik } from "formik"

// actions
import { loginUser } from "../../store/auth/login/actions"

const Login = props => {
  //Loader
  const store = useSelector(store => store)
  //meta title
  document.title = "Login | Rendezvous - Dashboard"

  const dispatch = useDispatch()

  const validation = useFormik({
    // enableReinitialize : use this flag when initial values needs to be changed
    enableReinitialize: true,

    initialValues: {
      email: "owner" || "",
      password: "12345" || "",
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Please Enter Your Email"),
      pwd: Yup.string().required("Please Enter Your Password"),
    }),
    onSubmit: values => {
      console.log("values from login", values)
      dispatch(loginUser(values, props.router.navigate))
      
    },
    
  })

  const { error } = useSelector(state => ({
      error: state.Login.error,
  
    }));
    
   return (
    <section
      className="bg-image vh-100 vw-100"
      style={{ backgroundImage: `url(${BG})`, overflowX:"hidden"}}
    >
      <div className="container-fluid px-0 h-100" style={{ width: "100%" }}>
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-10">
            <div className="card" style={{ borderRadius: "1rem" }}>
              <div className="row g-0">
                <div
                  className="col-md-6 col-lg-4 d-none d-md-block gradient"
                  style={{ borderRadius: "1rem 0 0 1rem" }}
                >
                  <div className="d-flex justify-content-center mt-4 ">
                    <img
                      src={Logo}
                      height={120}
                      width={120}
                      alt="logo"
                      className="img-fluid "
                    />
                  </div>
                  <div className=" m-3 p-2 " style={{ letterSpacing: 1 }}>
                    <span className="h2 m-0 d-flex justify-content-center mx-auto text-yellow"
                    style={{ color: "yellow" }}
                    >
                      RENDEZVOUS
                    </span>
                    <span
                      className="h5 m-0 d-flex justify-content-center mx-auto yellow"
                      style={{ color: "white" }}
                    >
                     GAME PARLOUR
                    </span>
                  </div>
                  <div className="d-flex justify-content-center mb-3">
                    <img
                      src={ill}
                      alt="logo"
                      height={250}
                      width={275}
                      className="img-fluid "
                    />
                  </div>
                </div>
                <div className="col-md-6 col-lg-8 ">
                  <div className="mt-0 p-0 d-flex justify-content-end me-5 mt-4 ">
                    {/* <Lang /> */}
                  </div>
                  <div className="card-body  p-4 p-lg-5 text-black justify-content-center ms-5 mt-0">
                    <Form
                      onSubmit={e => {
                        e.preventDefault()
                        validation.handleSubmit()
                        return false
                      }}
                    >
                      <div className="h-100 w-75">
                        <div className="d-flex align-items-center mb-4 pb-1">
                          <span className="h1 fw-bold mb-0 primary">Login</span>
                        </div>
                        <div className="px-4">
                          {error ? <Alert color="danger">{error}</Alert>  : null}
                        </div>

                        <div className="flex-row align-items-center px-4 py-3">
                          <label>Username</label>
                          <Input
                            autoComplete="off"
                            type="text"
                            name="username"
                            className="form-control"
                            placeholder="Enter Username"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            value={validation.values.username || ""}
                            invalid={
                              validation.touched.username &&
                              validation.errors.username
                                ? true
                                : false
                            }
                          />
                          {validation.touched.username &&
                          validation.errors.username ? (
                            <FormFeedback type="invalid">
                              {validation.errors.username}
                            </FormFeedback>
                          ) : null}
                        </div>

                        <div className="flex-row align-items-center px-4 py-3">
                          <label>Password</label>
                          <Input
                            autoComplete="off"
                            type="password"
                            className="form-control"
                            name="pwd"
                            placeholder="Enter Password"
                            onChange={validation.handleChange}
                            value={validation.values.pwd || ""}
                            onBlur={validation.handleBlur}
                            invalid={
                              validation.touched.pwd && validation.errors.pwd
                                ? true
                                : false
                            }
                          />
                          {validation.touched.pwd && validation.errors.pwd ? (
                            <FormFeedback type="invalid">
                              {validation.errors.pwd}
                            </FormFeedback>
                          ) : null}
                        </div>

                        <div className="px-4 py-3">
                      
                          <button
                            className="btn btn-lg btn-block text-white"
                            style={{
                              backgroundColor: "#002E4B",
                              width: "100%",
                            }}
                            type="submit"
                          >
                            Login
                          </button>
                        </div>
                        <p className="mb-5 pb-lg-2 d-flex justify-content-center">
                          <Link >Forgot Password ?</Link> 
                          {/* to="/forgot-password" disable for now */}
                        </p>
                      </div>
                    </Form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default withRouter(Login)

Login.propTypes = {
  history: PropTypes.object,
}
