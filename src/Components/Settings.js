import { useContext, useState } from "react"
import "./Settings.css"
import WeatherContext from '../Components/WeatherContext' 
import { MEASUREMENT_SYSTEMS } from "../Utilis"
import ThemeContext from "./Themecontext"


const Settings = () => {
const [openSettings, setOpenSettings] = useState(false);
const { dark, setDark, saveThemeToLocalStorage } = useContext(ThemeContext)
const weatherContextValue = useContext(WeatherContext);
console.log("WeatherContext value:", weatherContextValue);

const {measurementSystem, setMeasurementSystem} = weatherContextValue;

const changeMeasurementSystem = (system) => {
  
  setMeasurementSystem(system);
  setOpenSettings(false);
  
  
}

const toggleTheme = () => {
  setDark((prevDark) => !prevDark);
  saveThemeToLocalStorage(!dark)
}

  return (
    <div className='Settings'>
<div className="theme-toggler">
  <div className="theme-toggler-btns" onClick={toggleTheme}>
    <div className={`light-theme ${dark ? '' : 'active'}`}>
      <i className="bi bi-sun"></i>
    </div>
    <div className={`dark-theme ${dark ? 'active' : ''}`}>
      <i className="bi bi-moon"></i>
    </div>
  </div>
</div>
<div className="settings-btn" 
onClick={() => setOpenSettings((prevVal) => !prevVal)}>
  <i className={`bi bi-gear${openSettings ? '-fill' : ''}`}></i>
</div>
<div className={`settings-menu ${openSettings ? 'open' : ''}`}>
  <div className="measurement-systems">
    <h4>Measurement System:</h4>
    <div className="systems">
      {Object.values(MEASUREMENT_SYSTEMS).map((system) => (
        <div className={`system ${
          system === measurementSystem ? 'active' : ''
        }`} key={system}
        onClick={() => changeMeasurementSystem(system)}>{system}</div>
      ))}
    </div>
  </div>
</div>
    </div>
  )
}

export default Settings
 