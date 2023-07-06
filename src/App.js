import './DropDown.css';
import Dropdown from './Components/Dropdown';
import data from "./Services/Constants/DropDownValues.json";
import value from "./Services/Constants/DropDownSelectedValue";
function App() {
  return (
    <div className="App">
      <div className='inner-div'>
        <Dropdown width='15rem' allValues={data} selectedValue={value}></Dropdown>

      </div>
     
    </div>
  );
}

export default App;
