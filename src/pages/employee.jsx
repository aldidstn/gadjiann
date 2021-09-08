import React, { useEffect, useState } from "react"
import axios from "axios"
import Card from "../component/card"
import { Row, Form, Button, FormControl, InputGroup } from "react-bootstrap"
import { Search, PlusLg, ArrowRight, ArrowLeft } from "react-bootstrap-icons"



function Employee() {

  const [employeeData, setEmployeeData] = useState([])
  const [index, setIndex] = useState(0)

  function fetchEmployee() {
    axios({
      method: "get",
      url: "https://randomuser.me/api/?results=28"
    })
      .then(({ data }) => {
        setEmployeeData(data.results)
      })
      .catch(error => {
        console.log(error)
      })
  }

  function previousButton() {
    setIndex(index - 4)
  }

  function nextButton() {
    setIndex(index + 4)
  }

  useEffect(() => {
    fetchEmployee()
  }, [])

  return (
    <>
      <div id="dekstop-view">
        <div style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          padding: "100px 24px 64px 0"
        }}  >
          <div>
            <h2 style={{ color: "#1ecbe1" }}>PERSONNEL LIST</h2>
            <span>List of all personnels</span>
          </div>
          <div style={{
            display: "flex",
            flexDirection: "row",
            margin: "10px"
          }}
            className="form-input"
          >
            <Form className="d-flex justify-content-between align-items-center">
              <InputGroup className="mb-2">
                <InputGroup.Text><Search /></InputGroup.Text>
                <FormControl id="inlineFormInputGroup" placeholder="Find Personel" />
              </InputGroup>
            </Form>
            <Button variant="primary" style={{
              marginLeft:
                "10px"
            }} className="d-flex justify-content-between align-items-center">ADD PERSONNEL<PlusLg style={{
              marginLeft:
                "10px"
            }} /></Button>
          </div>
        </div>
      </div>
      <div id="mobile-view">
        <div style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "100px 24px 64px 0"
        }}  >
          <div>
            <h2 style={{ color: "#1ecbe1" }}>PERSONNEL LIST</h2>
            <span>List of all personnels</span>
          </div>
          <div style={{
            display: "flex",
            flexDirection: "column",
            margin: "10px"
          }}
            className="form-input"
          >
            <Form className="d-flex justify-content-between align-items-center">
              <InputGroup className="mb-2">
                <InputGroup.Text><Search /></InputGroup.Text>
                <FormControl id="inlineFormInputGroup" placeholder="Find Personel" />
              </InputGroup>
            </Form>
            <Button variant="primary" style={{
              marginLeft:
                "10px"
            }} className="d-flex justify-content-between align-items-center">ADD PERSONNEL<PlusLg style={{
              marginLeft:
                "10px"
            }} /></Button>
          </div>
        </div>
      </div>
      <div >
        <Row style={{ display: "flex", flexDirection: "row" }}>
          {employeeData.slice(index, index + 4).map(employee => <Card employee={employee} />)}
        </Row>
      </div>
      <div style={{ width: "40%", margin: "50px auto" }} className="d-flex justify-content-between align-items-center">
        <Button className="mr-5" disabled={index === 0} onClick={previousButton}><ArrowLeft />Previous Page</Button>
        <Button className="ml-5" disabled={employeeData.length - 4 === index} onClick={nextButton}>Next Page<ArrowRight /></Button>
      </div>
    </>
  )
}

export default Employee