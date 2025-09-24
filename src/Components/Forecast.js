import DailyForecastWidget from "./DailyForecastWidget"
import HourlyForecastWidget from "./HourlyForecastWidget"
import "./Forecast.css"
import HorizontallyScrollable from './HorizontallyScrollable';


const Forecast = ({title, type, data}) => {
  return (
    <div className="forecast">
<div className="forecast-container">
  <h3>{title}</h3>
  <HorizontallyScrollable className="forecast-widget">
    {data.map((singleData) => (
      <div key={singleData.date || singleData.day}>
       {type === "hourly" ?
      ( <HourlyForecastWidget data={singleData}/> ):
      ( <DailyForecastWidget data={singleData}/>)}
      </div>
    ))}HorizontallyScrollable
  </HorizontallyScrollable>
</div>
    </div>
  )
}

export default Forecast
