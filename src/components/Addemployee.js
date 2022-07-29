import React, {useState} from 'react'
import Swal from 'sweetalert2';

import EmpHeader from './EmpHeader';
import EmpList from './EmpList';
import EmpAdd from './EmpAdd';
import EmpEdit from './EmpEdit';

import { employeesData } from '../data'

const Addemployee = () => {

    const [employees, setEmployees] = useState(employeesData);
    const [selectedEmployee, setSelectedEmployee] = useState(null);
    const [isAdding, setIsAdding] = useState(false);
    const [isEditing, setIsEditing] = useState(false);

    const handleEdit = (id) => {
        // console.log('Edit id', id)

        const[employee] = employees.filter(employee => employee.id === id);
        setSelectedEmployee(employee);
        setIsEditing(true);
    }
    const handleDelete = (id) => {
        // console.log('Delete id', id)
        
        Swal.fire({
            icon:'warning',
            title:'Are you sure?',
            text: "You won't be able to revert this!",
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText:'No, cancel!',

        }).then(result => {
            if(result.value) {
                const[employee] = employees.filter(employee => employee.id === id);

                Swal.fire({
                    icon: 'success',
                    title: 'Deleted!',
                    text: `${employee.firstName} ${employee.lastName}'s data has been deleted.`,
                    showConfirmButton: false,
                    timer: 1500,
                });

                setEmployees(employees.filter(employee => employee.id !== id));
            }
        });
    }

  return (
    <div className='container'>
        {/* list */}
        {!isAdding && !isEditing &&(
            <>
                <EmpHeader setIsAdding = {setIsAdding}/>
                <EmpList employees = {employees} 
                handleEdit = {handleEdit}
                handleDelete = {handleDelete}/>
            </>
        )}
        {/* add */}
        {isAdding && (
            <EmpAdd employees = {employees}
            setEmployees = {setEmployees}
            setIsAdding = {setIsAdding} />
        )}
        {/* edit */}
        {isEditing && (
            <EmpEdit employees = {employees}
            selectedEmployee = {selectedEmployee}
            setEmployees = {setEmployees}
            setIsEditing = {setIsEditing} />
        )}
    </div>
  )
}

export default Addemployee