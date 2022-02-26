import React, { useReducer } from "react";
import { v4 as uuidv4 } from "uuid";
import employeeContext from "./employeeContext";
import employeeReducer from "./employeeReducer";
import {
    ADD_EMPLOYEE,
    DELETE_EMPLOYEE,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_EMPLOYEE
} from '../../types';

const EmployeeState = props => {
    const initialState = {
        employees: [
            {
                id: 1,
                name: 'Uzair Saeed',
                salary: '2000',
                min: '2000',
                max: '2000'
            },
            {
                id: 2,
                name: 'Aftab Iqbal',
                salary: '5000',
                min: '5000',
                max: '5000'
            }
        ],
        current: null
    };
    const [state, dispatch] = useReducer(employeeReducer, initialState);

    //Add Employee
    const addEmployee = employee => {
        employee.id = uuidv4();
        dispatch({ type: ADD_EMPLOYEE, payload: employee })
    }
    //Delete Employee
    const deleteEmployee = id => {
        dispatch({ type: DELETE_EMPLOYEE, payload: id })
    }
    //Set Current Employee
    const setCurrent = employee => {
        dispatch({ type: SET_CURRENT, payload: employee })
    }
    //Clear Current Employee
    const clearCurrent = () => {
        dispatch({ type: CLEAR_CURRENT })
    }
    //Update Employee
    const updateEmployee = employee => {
        dispatch({ type: UPDATE_EMPLOYEE, payload: employee })
    }
    return (
        <employeeContext.Provider
            value={{
                employees: state.employees,
                current: state.current,
                addEmployee,
                deleteEmployee,
                setCurrent,
                clearCurrent,
                updateEmployee
            }}
        >
            {props.children}
        </employeeContext.Provider>
    );
};
export default EmployeeState