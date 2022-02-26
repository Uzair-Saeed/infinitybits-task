import React, { useContext, useEffect, useState } from 'react';
import EmployeeContext from '../context/employee/employeeContext';

const EmployeeForm = () => {

    const employeeContext = useContext(EmployeeContext);
    const { addEmployee, current, clearCurrent, updateEmployee } = employeeContext;

    const initialEmployee = {
        name: '',
        salary: 0,
        min: 0,
        max: 0
    };
    const [employee, setEmployee] = useState(initialEmployee);
    const { name, salary } = employee;

    useEffect(() => {
        if (current !== null) {
            setEmployee(current);
        } else {
            setEmployee({
                name: '',
                salary: '',
                min: 0,
                max: 0
            });
        }

    }, [employeeContext, current]);




    const onChange = e => {
        setEmployee({ ...employee, [e.target.name]: e.target.value });

    }



    const onSubmit = e => {
        e.preventDefault();
        if (current === null) {
            addEmployee({ ...employee, min: salary, max: salary });
        } else {
            let a = parseInt(salary), b = parseInt(current.max);
            console.log(a >= b);
            if (a >= b) {
                console.log('max');
                updateEmployee({ ...employee, max: salary });
            }
            else if (a <= b) {
                console.log('min');
                updateEmployee({ ...employee, min: salary });
            }
            else {
                console.log('other');
                updateEmployee({ ...employee, min: current.min, max: current.max })
            };
        }
        clearAll();
    }

    const clearAll = () => {
        clearCurrent();
    }

    return (
        <form onSubmit={onSubmit}>
            <h2 className='text-primary'>{current ? 'Update Employee' : 'Add Employee'}</h2>
            <input type='text' placeholder='Name' name='name' value={name} onChange={onChange} required />
            <input type='number' placeholder='Salary' name='salary' value={salary} onChange={onChange} required />
            <div>
                <input type='submit' value={current ? 'Update Employee' : 'Add Employee'} className='btn btn-primary btn-block' />
            </div>
            {current && <button className='btn btn-light btn-block' onClick={clearAll}>Clear</button>}
        </form>
    )
}

export default EmployeeForm
