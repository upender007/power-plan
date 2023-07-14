import './DropDown.css';
import mockServer from './__mocks__/mockServers';
import './App.scss';
import PowerPlanRegisterUser from "./containers/PowerPlanRegisterUser"

mockServer();

function App() {
  return (
    <div className="App">
        <>
           <PowerPlanRegisterUser/>
        </> 
    </div>
  );
}

export default App;
