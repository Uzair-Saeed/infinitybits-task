import React, { useContext } from 'react';
import EmployeeContext from '../context/employee/employeeContext';
import EmployeeCard from './EmployeeCard';

const Employee = () => {
    const employeeContext = useContext(EmployeeContext);

    const { employees } = employeeContext;
    return (
        <>
            {employees.map((employees) => (
                <EmployeeCard key={employees.id} employees={employees} />
            ))}
        </>
    )
}

export default Employee