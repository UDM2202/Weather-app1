import 'bootstrap-icons/font/bootstrap-icons.css'
import './Place.css'
import { useContext } from 'react'
import WeatherContext from './WeatherContext'

const Place = () => {
  const { place } = useContext(WeatherContext)
  return (
    <div className="place">
      <i className="bi bi-geo-alt-fill"></i> <b>{place.name},</b>
        <span className="country">{place.country}</span>
    </div>
  )
}

export default Place 
