import './DropDown.css';
import mockServer from './__mocks__/mockServers';
import * as de from './localization/de-DE';
import * as en from './localization/en-GB';
import './App.scss';
import PowerPlanRegisterUser from "./containers/PowerPlanRegisterUser"

mockServer();

function App() {
  const currentLocale = localStorage.getItem('locale');
  console.log(en.AccordianData)
  let localization = {};
  if (currentLocale === 'de') {
    localization = de;
  } else {
    localization = en;
  }
  return (
    <div className="App">
      <>
        <PowerPlanRegisterUser localization={localization} />
      </>
    </div>
  );
}

export default App;
