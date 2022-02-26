import './App.css';
import EmployeeForm from './employees/EmployeeForm';
import Employee from './employees/Employee';
import EmployeeState from './context/employee/EmployeeState';

function App() {
  return (
    <EmployeeState>
      <div className="App">
        <div className="container">
          <div>
            <EmployeeForm />
          </div>
          <div className='grid-2'>
            <Employee />
          </div>
        </div>
      </div>
    </EmployeeState>
  );
}

export default App;
