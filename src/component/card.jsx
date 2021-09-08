import React from "react"
import { Card, Col } from "react-bootstrap"
import { ThreeDots } from "react-bootstrap-icons"

function EmployeeCard(props) {

  const { employee } = props

  return (
    <>
      <Col xl={3} id="dekstop-view">
        <Card style={{ width: '100%', height: "40rem" }}>
          <div className="d-flex justify-content-between align-items-center p-3">
            <Card.Title style={{ fontSize: "16px" }}>Personel ID : <span style={{ color: "#1ecbe1" }}>{employee.login.uuid.split('-')[0]}</span> </Card.Title>
            <ThreeDots />
          </div>
          <hr className="m-0" />
          <Card.Body>
            <Card.Img className="image" src={employee.picture.large} style={{ verticalAlign: "middle", borderRadius: "50%  " }} />
            <br />
            <Card.Title className="subtitle-card">Name</Card.Title>
            <Card.Text>{`${employee.name.first} ${employee.name.last}`}</Card.Text>
            <Card.Title className="subtitle-card">Telephone</Card.Title>
            <Card.Text>{employee.phone}</Card.Text>
            <Card.Title className="subtitle-card">Birthdate</Card.Title>
            <Card.Text>{employee.dob.date.split('T')[0]}</Card.Text>
            <Card.Title className="subtitle-card">Email</Card.Title>
            <Card.Text>{employee.email}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col xl={3} className="mt-5" id="mobile-view">
        <Card style={{ width: '100%', height: "15rem" }}>
          <div className="d-flex justify-content-between align-items-center p-3">
            <Card.Title style={{ fontSize: "16px" }}>Personel ID : <span style={{ color: "#1ecbe1" }}>{employee.login.uuid.split('-')[0]}</span> </Card.Title>
            <ThreeDots />
          </div>
          <hr className="m-0" />
          <Card.Body className="d-flex flex-row justify-content-between">
            <div style={{width:"50%"}}>
              <Card.Img className="image" src={employee.picture.large} style={{ verticalAlign: "middle", borderRadius: "50%  " }} />
              <br />
            </div>
            <div style={{width:"50%"}}>
              <Card.Title className="subtitle-card">Name</Card.Title>
              <Card.Text>{`${employee.name.first} ${employee.name.last}`}</Card.Text>
              <Card.Title className="subtitle-card">Telephone</Card.Title>
              <Card.Text>{employee.phone}</Card.Text>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </>
  )
}

export default EmployeeCard