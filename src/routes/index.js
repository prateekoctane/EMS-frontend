import React from "react"
import { Navigate } from "react-router-dom"
// Profile
import UserProfile from "../pages/Authentication/user-profile"

// Authentication related pages
import Login from "../pages/Authentication/Login"
import Logout from "../pages/Authentication/Logout"
import Register from "../pages/Authentication/Register"
import ForgetPwd from "../pages/Authentication/ForgetPassword"

import TwostepVerification2 from "../pages/AuthenticationInner/auth-two-step-verification-2"

// Dashboard
import Dashboard from "../pages/Dashboard/index"
import DashboardSaas from "../pages/Dashboard-saas/index"
import DashboardCrypto from "../pages/Dashboard-crypto/index"
import DashboardJob from "../pages/DashboardJob/index"

//Pages
import PagesMaintenance from "../pages/Utility/pages-maintenance"
import PagesComingsoon from "../pages/Utility/pages-comingsoon"
import Pages404 from "../pages/Utility/pages-404"
import Pages500 from "../pages/Utility/pages-500"

//Contacts
import Users from "../pages/Users/Users"
import ChangePassword from "../pages/Users/ChangePassword"


const authProtectedRoutes = [

  { path: "/dashboard", component: <Dashboard /> },
  { path: "/dashboard-saas", component: <DashboardSaas /> },
  { path: "/dashboard-crypto", component: <DashboardCrypto /> },
  { path: "/dashboard-job", component: <DashboardJob /> },
  { path: "/user-changepassword", component: <ChangePassword />},


  // //profile
  { path: "/profile", component: <UserProfile /> },
  { path: "/users", component: <Users /> },


  // this route should be at the end of all other routes
  // eslint-disable-next-line react/display-name
  {
    path: "/",
    exact: true,
    component: <Navigate to="/dashboard" />,
  },
]

const publicRoutes = [
  { path: "/logout", component: <Logout /> },
  { path: "/login", component: <Login /> },
  { path: "/forgot-password", component: <ForgetPwd /> },

  { path: "/register", component: <Register /> },

  { path: "/pages-maintenance", component: <PagesMaintenance /> },
  { path: "/pages-comingsoon", component: <PagesComingsoon /> },
  { path: "/pages-404", component: <Pages404 /> },
  { path: "/pages-500", component: <Pages500 /> },

  {
    path: "/auth-two-step-verification-2",
    component: <TwostepVerification2 />,
  },
]

export { authProtectedRoutes, publicRoutes }
