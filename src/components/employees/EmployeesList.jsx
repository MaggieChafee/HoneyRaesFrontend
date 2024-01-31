import { useEffect, useState } from "react";
import { Table } from "reactstrap";
import { Link } from "react-router-dom";
import { getEmployees } from "../../data/employeeData";

export default function EmployeesList() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    getEmployees().then(setEmployees);
  }, []);

  return (
    <Table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Specialty</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {employees.map((t) => (
          <tr key={`employee-${t.id}`}>
            <th scope="row">{t.id}</th>
            <td>{t.name}</td>
            <td>{t.specialty}</td>
            <td>
              <Link to={`${t.id}`}>Details</Link>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
