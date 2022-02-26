import {
    ADD_EMPLOYEE,
    DELETE_EMPLOYEE,
    UPDATE_EMPLOYEE,
    SET_CURRENT,
    CLEAR_CURRENT
} from '../../types';

export default (state, action) => {
    switch (action.type) {
        case ADD_EMPLOYEE:
            return {
                ...state,
                employees: [...state.employees, action.payload]
            };
        case DELETE_EMPLOYEE:
            return {
                ...state,
                employees: state.employees.filter(employee => employee.id !== action.payload)
            };
        case SET_CURRENT:
            return {
                ...state,
                current: action.payload
            };
        case CLEAR_CURRENT:
            return {
                ...state,
                current: null
            };
        case UPDATE_EMPLOYEE:
            return {
                ...state,
                employees: state.employees.map(employee =>
                    employee.id === action.payload.id ? action.payload : employee
                )
            };
        default:
            return state;
    }
}