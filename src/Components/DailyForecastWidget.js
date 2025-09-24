import WeatherIcon from './WeatherIcon'
import './HourlyForecastWidget.css'
import { useContext } from 'react'
import WeatherContext from './WeatherContext'
const DailyForecastWidget = ({ data }) => {
  const {units} = useContext(WeatherContext)
  const { day,
     icon, summary,
      temperature_max, 
      temperature_min,
       precipitation 
      } = data

        const now_date = {
    day: new Intl.DateTimeFormat(navigator.language, {
      weekday: 'short',
      day: '2-digit',
      month: '2-digit',
       timeZone: 'UTC' ,
    }).format(new Date()),
    
  }

  const weather_date = {
    day: new Intl.DateTimeFormat(navigator.language, {
      weekday: 'short',
      day: '2-digit',
      month: '2-digit',
       timeZone: 'UTC' ,
    }).format(new Date(day)),
 
  };

  weather_date.day =
   now_date.day === weather_date.day ? 'Today' : weather_date.day;

  return (
  <div className="hourly-widget">
      <div className="day">{weather_date.day}</div>
      
      <div className="icon-temp">
        <div className="icon">
          <WeatherIcon iconNumber={icon} alt={summary} />
        </div>
        <div className="temp">
          <div className="max">{Math.floor(temperature_max)} {units.temperature}</div>
          <div className="min">{Math.floor(temperature_min)} {units.temperature}</div>
        </div>
        <div className="precipitation">{Math.floor(precipitation.total)} {units.precipitation}</div>
      </div>
    </div>
    );
}

export default DailyForecastWidget
 