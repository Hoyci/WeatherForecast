import Aside from './Aside'
import Content from './Content'
import Loader from './Content/Loader/Loader'

import { useEffect, useState } from 'react'

import openMeteorAPI from '../backend/openMeteorAPI'
import googlePlacesAPI from '../backend/googlePlacesAPI'

function App() {
  const [weatherData, setWeatherData] = useState({})
  const [placeData, setPlaceData] = useState({})
  const [status, setStatus] = useState('loading')

  useEffect(() => {
    function fetchApi() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(async ({coords}) => {
          const { data: newWeatherData } = await openMeteorAPI.getForecast(coords)
          setWeatherData(newWeatherData)
          const { data: newPlaceData } = await googlePlacesAPI.getPlacesData(coords)
          setPlaceData(newPlaceData.results[0].address_components)
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
        <Content />
        <Aside weatherData={weatherData} placeData={placeData}/>
      </>
    }
    </>
  )
}

export default App;
