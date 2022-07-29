import React from "react";

function EmpList({ employees, handleEdit, handleDelete }) {

    // const formatter = 

  return (
    <div className="container-table">
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">No.</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email</th>
            <th scope="col">Salary</th>
            <th scope="col">Date</th>
            <th scope="col" colSpan={2}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.length > 0 ? (
            employees.map((employee, i) => (
                <tr key={employee.id}>
                    <td>{i+1}</td>
                    <td>{employee.firstName}</td>
                    <td>{employee.lastName}</td>
                    <td>{employee.email}</td>
                    <td>{employee.salary}</td>
                    <td>{employee.date}</td>
                    <td>
                        <button onClick={() => handleEdit(employee.id)} className='text- btn btn-outline-info'>Edit</button>
                    </td>
                    <td>
                        <button onClick={() => handleDelete(employee.id)} className='text-left btn btn-outline-danger'>Delete</button>
                    </td>
                </tr>
            ))
          ) : (
            <tr>
                <td colSpan={7}>No Employees</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default EmpList;
