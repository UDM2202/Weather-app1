import CurrentWeather from './CurrentWeather'
import Forecast from './Forecast'
import './Main.css'
import { useContext } from 'react'
import WeatherContext from './WeatherContext'
import Loader from './Loader'

const Main = () => {
  const { loading, currentWeather, dailyForecast, hourlyForecast } = 
  useContext(WeatherContext);

  return (
    <div className="main">
     {loading ? (
      <Loader/>
     ) : (
      <>
       <CurrentWeather data={currentWeather}/>
      <Forecast type="hourly" title="HOURLY FORECAST" data={hourlyForecast} />
      <Forecast type="daily" title="21 DAYS FORECAST" data={dailyForecast} />
      </>
     )}
    </div>
  )
}

export default Main
