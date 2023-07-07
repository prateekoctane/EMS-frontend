import PropTypes from "prop-types"
import React, { useState, useEffect } from "react"

import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  Col,
  Container,
  Label,
  Row,
  Table,

} from "reactstrap"
import { Link } from "react-router-dom"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"
import { loadRosterOwner } from "../../store/owner-roster/action";

//i18n
import { withTranslation } from "react-i18next"

const Dashboard = props => {
  //meta title
  document.title = "Dashboard | Skote - React Admin & Dashboard Template"

  const [employee_id, setEmployeeId] = useState(localStorage.getItem("employee_id"));
  const [employeeToken, setEmployeeToken] = useState(localStorage.getItem("userToken"));
  const [shiftTime, setShiftTime] = useState([]);
  const [searchValue, setSearchValue] = useState("")
  const [visible, setVisible] = useState(true)
  const [visibleFilteredData, setVisibleFilteredData] = useState(false);
  const [filteredData, setFilteredData] = useState([])
  const dispatch = useDispatch();

  useEffect(() => {

    // function getRoster(token) {

    //   console.log("token:",token)
    //   axios.post(`https://api-rendezvous.mhsinfotech.qa/rosters/get_by_employee`, {employee_id:employee_id}, {
    //     headers: {
    //       Authorization: `Bearer ${token}`
    //     }
    //   }).then(res => {
    //     console.log("response from roster/get_by_employee route", res);
    //     setrosterData(res.data.data[0])

    //   }).catch(err => console.log(err));
    // }
    // getRoster(employeeToken);

    dispatch(loadRosterOwner())
    // console.log(" hello form owner roster dashboard")

  }, [])

  const ownerRosterData = useSelector(store => store.ownerRoster.roster);
  console.log(ownerRosterData, "rosterdata")

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          {/* Render Breadcrumb */}
          <Breadcrumbs
            title={props.t("Dashboards")}
            breadcrumbItem={props.t("Dashboard")}
          />
          <Row>
            <Col >
              <Card>
                <CardBody>

                  <CardTitle style={{display:"flex", justifyContent:"space-between", alignItems:"center"}} >
                    Roster

                    <Link to="/roster" >
                      <Button style={{ border: "none" }} className="btn btn-info">Edit Roster</Button>
                    </Link>
                  </CardTitle>

                  <div style={{ overflowX: "auto" }}>
                    <Table className="table table-striped table-bordered mb-0">
                      <thead>
                        <tr style={{ height: "64px", width: "50px" }}>
                          <th>#</th>
                          <th>Employee Code</th>
                          <th>Name</th>
                          <th>Sat</th>
                          <th>Sun</th>
                          <th>Mon</th>
                          <th>Tue</th>
                          <th>Wed</th>
                          <th>Thu</th>
                          <th>Fri</th>
                        </tr>
                      </thead>
                      <tbody>
                        {ownerRosterData.map((emp, index) => <tr key={index} style={{ height: "64px", width: "50px" }}>
                          <td>{index + 1}</td>
                          <td>{emp.code}</td>
                          <td>{emp.name}</td>
                          <td>{emp && emp.saturday && emp.saturday.name || "Off"}</td>
                          <td>{emp && emp.sunday && emp.sunday.name || "Off"}</td>
                          <td>{emp && emp.monday && emp.monday.name || "Off"}</td>
                          <td>{emp && emp.tuesday && emp.tuesday.name || "Off"}</td>
                          <td>{emp && emp.wednesday && emp.wednesday.name || "Off"}</td>
                          <td>{emp && emp.thursday && emp.thursday.name || "Off"}</td>
                          <td>{emp && emp.friday && emp.friday.name || "Off"}</td>
                        </tr>)}
                      </tbody>
                    </Table>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>

        </Container>
      </div>
    </React.Fragment>
  )
}

Dashboard.propTypes = {
  t: PropTypes.any,
  chartsData: PropTypes.any,
  onGetChartsData: PropTypes.func,
}

export default withTranslation()(Dashboard)
