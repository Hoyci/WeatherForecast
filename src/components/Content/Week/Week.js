import { IoWater } from 'react-icons/io5'
import { BsSunFill, 
    BsFillCloudSunFill, 
    BsFillCloudFogFill, 
    BsFillCloudDrizzleFill,  
    BsFillCloudRainHeavyFill,
    BsFillCloudLightningRainFill,
    BsCloudSnowFill,
    BsSnow,
} from 'react-icons/bs'

import { BiCloudDrizzle } from 'react-icons/bi'
import { IoIosThunderstorm } from 'react-icons/io'
import './week.css'
import { useState } from 'react/cjs/react.development'

function renderForecast(forecast) {
    if (forecast >= 1 && forecast <= 3){
        return <BsFillCloudSunFill color='#FFE269' fontSize='15px' />
    } else if (forecast >= 45 && forecast <= 48){
        return <BsFillCloudFogFill color='#9A9A98' fontSize='15px' />
    } else if (forecast >= 51 && forecast <= 55) {
        return <BsFillCloudDrizzleFill color='#9A9A98' fontSize='15px'/>
    } else if (forecast >= 56 && forecast <= 57){
        return <BiCloudDrizzle color='#9FBFEC' fontSize='15px' />
    } else if (forecast >= 61 && forecast <= 67) {
        return <BsFillCloudRainHeavyFill color='#A8C3C7' fontSize='15px' />
    } else if (forecast >= 71 && forecast <= 77){
        return <BsCloudSnowFill color='#4C555A' fontSize='15px' />
    } else if (forecast >= 80 && forecast <= 82) {
        return <BsFillCloudLightningRainFill color='#A8C3C7' fontSize='15px' />
    } else if (forecast >= 85 && forecast <= 86) {
        return <BsSnow color='#4C555A' fontSize='15px'/>
    } else if (forecast >= 95 && forecast <= 99) {
        return <IoIosThunderstorm color='#9377F0' fontSize='15px' />
    } else {
        return <BsSunFill color='#FFE269' fontSize='15px' />
    }
}

function getRelativeHumidity(weatherData) {
    const arrayRelativeHumidity = weatherData.hourly.relativehumidity_2m
    const response = []
    while (arrayRelativeHumidity.length > 0) {
        response.push(arrayRelativeHumidity.splice(0, 24))
    }
    return response
}

function HeaderWeek()  {
    return (
        <div className='headerWeek'>
            <p>Day of week</p>
            <p>Relative Humidity</p>
            <p>Forecast</p>
            <p>Min</p>
            <p>Max</p>
        </div>
    )
}

function ContentWeek({day, RelativeHumidity, forecast, min, max}) {
    // console.log('forecast', forecast)
    return (
        <div className='contentWeek'>
                <p className='dayOfWeek'>{new Date(day * 1000).toLocaleDateString('en-us', {weekday : 'long'})}</p> 
                <div className='RelativeHumidity'>
                    <IoWater color='#6A9FD7' fontSize='15px' />
                    <p>{RelativeHumidity}%</p>
                </div>
                {renderForecast(forecast)}
                <p className='min'> {Math.ceil(min)}°C</p>
                <p className='max'>{Math.ceil(max)}°C</p>
        </div>
    )
}

export default function Week({ weatherData, closest }) {
    const [relativeHumidity, setRelativeHumidity] = useState(getRelativeHumidity(weatherData))

    return (
        <div className='container'>
            <HeaderWeek />

            {weatherData.daily.time.map((item, index) => 
                <ContentWeek 
                    key={index}
                    day={item} 
                    RelativeHumidity={relativeHumidity[index][closest]} 
                    forecast={weatherData.daily.weathercode[index]} 
                    min={weatherData.daily.temperature_2m_min[index]} 
                    max={weatherData.daily.temperature_2m_max[index]}
                />
            )}
        </div>
    )
}