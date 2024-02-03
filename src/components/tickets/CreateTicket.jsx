import { useEffect, useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { createServiceTicket } from "../../data/serviceTicketsData";
import { getCustomers } from "../../data/customerData";

const initialState = {
  id: 0,
  customerId: 0,
  employeeId: 0,
  description: '',
  emergency: false,
  dateCompleted: null,
}

export default function CreateTicket() {
  const [formInput, setFormInput] = useState({initialState});
  const [employees, setEmployees] = useState([]);
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    getCustomers.then(setCustomers);
  }, [])
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
            name="customerId"
            value={formInput.customerId}
            type="select"
          >{customers.map((customer) => (
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
            type="textarea"
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
          >
            <option>
             87
            </option>
            <option>
             77
            </option>
            <option>
              90
            </option>
          </Input>
        </FormGroup>
        <FormGroup check>
          <Label check for="emergency">
            This is an emergency.
          </Label>
          <Input id="emergency" type="checkbox" name="emergency" checked={formInput.emergency} />
          
        </FormGroup>
        <FormGroup>
          <Label for="exampleDate">
            DateCompleted
          </Label>
          <Input
            id="exampleDate"
            name="date"
            value-={formInput.dateCompleted}
            placeholder="date placeholder"
            type="date"
          />
        </FormGroup>
        <Button
        color="primary"
        tag="input"
        type="submit"
        />
      </Form>
  </>  
}
