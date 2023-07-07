import axios from "axios"

// Submit Form
const postSubmitForm = (url, data) => {
  const token = localStorage.getItem("userToken")
  // data = {...data,employee_id:lacalStorage.getItem("employee_id")}
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  }
  return axios
    .post(url, data, config)
    .then(response => {
      if (response.status >= 200 || response.status <= 299) return response.data
      throw response.data
      console.log(response, " from helper function")
      console.log(url, "url from backend helper functions")
      // return response
    })
    .catch(err => {
      var message
      console.log(err)
      if (err.response && err.response.status) {
        switch (err.response.status) {
          case 404:
            message = "Sorry! the page you are looking for could not be found"
            break
          case 500:
            message =
              "Sorry! something went wrong, please contact our support team"
            break
          case 401:
            message = "Invalid credentials"
            break
          default:
            message = err[1]
            break
        }
      }
      throw message
    })
}
export { postSubmitForm }

// Submit Form Without Auth
const postSubmitFormNoAuth = (url, data) => {
  return axios
    .post(url, data)
    .then(response => {
      console.log("respone form hepler", response)
      if (response.status >= 200 || response.status <= 299) return response.data
      throw response.data
    })
    .catch(err => {
      var message
      if (err.response && err.response.status) {
        switch (err.response.status) {
          case 404:
            message = "Sorry! the page you are looking for could not be found"
            break
          case 500:
            message =
              "Sorry! something went wrong, please contact our support team"
            break
          case 401:
            message = "Invalid credentials"
            break
          default:
            message = err[1]
            break
        }
      }
      throw message
    })
}
export { postSubmitFormNoAuth }

// Submit Form with form-data
const postSubmitForm_withformdata = (url, data) => {
  console.log("data", ...data)
  const token = localStorage.getItem("userToken")
  const config = {
    headers: { Authorization: token },
  }
  return axios
    .post(url, data, config)
    .then(response => {
      console.log("res[once", response)
      if (response.status >= 200 || response.status <= 299) return response.data
      throw response.data
    })
    .catch(err => {
      var message
      if (err.response && err.response.status) {
        switch (err.response.status) {
          case 404:
            message = "Sorry! the page you are looking for could not be found"
            break
          case 500:
            message =
              "Sorry! something went wrong, please contact our support team"
            break
          case 401:
            message = "Invalid credentials"
            break
          default:
            message = err[1]
            break
        }
      }
      throw message
    })
}
export { postSubmitForm_withformdata }
