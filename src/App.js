import './components/Dropdown/style.scss';
import mockServer from './__mocks__/mockServers';
import * as de from './localization/de-DE';
import * as en from './localization/en-GB';
import { MyContext } from './MyContext';
import './App.scss';
import PowerPlanRegisterUser from "./containers/PowerPlanRegisterUser"

mockServer();

function App() {
  const currentLocale = localStorage.getItem('locale');
  let localization = {};
  if (currentLocale === 'de') {
    localization = de;
  } else {
    localization = en;
  }
  return (
    <div className="App">
      <>
      <MyContext.Provider value= {{ name:'Rajneesh Aws'}}>
        <PowerPlanRegisterUser localization={localization}/>
      </MyContext.Provider>
      </>
    </div>
  );
}

export default App;
