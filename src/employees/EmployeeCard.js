import React, { useContext } from 'react';
import EmployeeContext from '../context/employee/employeeContext';

const EmployeeCard = ({ employees }) => {

    const employeeContext = useContext(EmployeeContext);
    const { deleteEmployee, setCurrent, clearCurrent } = employeeContext;

    const { id, name, salary, min, max } = employees;

    const onDelete = () => {
        deleteEmployee(id);
        clearCurrent();
    }
    return (
        <>
            <div div className='card bg-light'>
                <h3 className='text-primary text-left' > {name}
                    <div style={{ color: '#4C4646' }}>
                        <ul >
                            <li>Salary : {salary} $</li>
                            <li>Tax to pay : {salary * 0.04} $</li>
                            <li>Minimum salary received: {min} $</li>
                            <li>Maximum salary received: {max} $</li>
                        </ul>
                        <p>
                            <button className='btn btn-dark btn-sm' onClick={() => setCurrent(employees)}>Update</button>
                            <button className='btn btn-danger btn-sm' onClick={onDelete}>Delete</button>
                        </p>
                    </div>
                </h3>
            </div>
        </>
    )
}

export default EmployeeCard