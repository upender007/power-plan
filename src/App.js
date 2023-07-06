import './DropDown.css';
import Dropdown from './Components/Dropdown';
import logo from './logo.svg';
import './App.scss';
import data from "./Services/Constants/DropDownValues.json";
import value from "./Services/Constants/DropDownSelectedValue";
import PowerPlanRegisterUser from "../src/Components/PowerPlanRegisterUser"
import './DropDown.css';
import Dropdown from './Components/Dropdown';
function App() {
  return (
    <div className="App">
        <>
           <PowerPlanRegisterUser/>
        </>
      {/* <div className='inner-div'>
                <Dropdown width='15rem' allValues={data} selectedValue={value}></Dropdown>

      </div> */}
     
    </div>
  );
}

export default App;
