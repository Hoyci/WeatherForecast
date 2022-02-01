import Aside from './Aside'
import Content from './Content'
import Loader from './Content/Loader/Loader'

import { useEffect, useState } from 'react'

import openMeteorAPI from '../APIs/openMeteorAPI'
import googlePlacesAPI from '../APIs/googlePlacesAPI'

function findClosest(weatherData) {
  const arrayDates = weatherData.hourly.time
  const now = Math.floor(Date.now() / 1000) 
  const closest = arrayDates.reduce(function(previous, current) {
      return (Math.abs(current - now) < Math.abs(previous - now) ? current : previous)
  })
  const closestPosition = arrayDates.findIndex((item) => item === closest)
  // console.log('closest', closestPosition)
  return closestPosition
}

function App() {
  const [weatherData, setWeatherData] = useState({})
  const [placeData, setPlaceData] = useState({})
  const [status, setStatus] = useState('loading')
  const [closest, setClosest] = useState()
  
  useEffect(() => {
    function fetchApi() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(async ({coords}) => {
          const { data: newWeatherData } = await openMeteorAPI.getForecast(coords)
          setWeatherData(newWeatherData)
          const { data: newPlaceData } = await googlePlacesAPI.getPlacesData(coords)
          setPlaceData(newPlaceData.results[0].address_components)
          setClosest(findClosest(newWeatherData))
          setStatus('success')
        })
      }
    }
    fetchApi()
  }, [])
    
  // console.log('weatherData', weatherData)
  // console.log('placeData', placeData)
  // console.log(status)

  return (  
    <>
      {
      status ===  'loading' ?
      <Loader />
      :
      <>
        <Content weatherData={weatherData} closest={closest} />
        <Aside weatherData={weatherData} placeData={placeData} closest={closest} />
      </>
    }
    </>
  )
}

export default App;
