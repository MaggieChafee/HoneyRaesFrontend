import { useEffect, useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { createServiceTicket } from "../../data/serviceTicketsData";
import { getCustomers } from "../../data/customerData";
import { getEmployees } from "../../data/employeeData"
import PropTypes from "prop-types";

const initialState = {
  id: 0,
  customerId: 0,
  employeeId: 0,
  description: '',
  emergency: false,
}

export default function CreateTicket() {
  const [formInput, setFormInput] = useState(initialState);
  const [employees, setEmployees] = useState([]);
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    getCustomers().then(setCustomers);
    getEmployees().then(setEmployees);
    setFormInput
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevState) => (
      {
        ...prevState,
        [name]: value,
      }
    ))}

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const payload = { 
      ...formInput
    };
    createServiceTicket(payload);
  }

  return <>
    <h3>Submit a Ticket</h3>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="customerId">
            Customer
          </Label>
          <Input
            id="customerId"
            type="select"
            name="customerId"
            value={formInput.customerId}
            onChange={handleChange}
          >{customers?.map((customer) => (
            <option key={customer.id} value={customer.id}>{customer.name}</option>
            ))}
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="exampleText">
            Describe the issue. 
          </Label>
          <Input
            id="exampleText"
            name="description"
            value={formInput.description}
            type="text"
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="employeeId">
            Employee
          </Label>
          <Input
            id="employeeId"
            name="employeeId"
            value={formInput.employeeId}
            type="select"
            onChange={handleChange}
          >{employees?.map((employee) => (
            <option key={employee.id} value={employee.id}>{employee.name}</option>
            ))}
          </Input>
        </FormGroup>
        <FormGroup check>
          <Label check for="emergency">
            This is an emergency.
          </Label>
          <Input id="emergency" type="checkbox" name="emergency" checked={formInput.emergency} onChange={handleChange} />
          
        </FormGroup>
        <Button
        color="primary"
        tag="input"
        type="submit"
        />
      </Form>
  </>  
}
