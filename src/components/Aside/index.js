import './Aside.css'
import { WiCloudy, WiSunrise, WiSunset } from 'react-icons/wi'
import { useState } from 'react/cjs/react.development'

function findClosest(weatherData) {
    const arrayDates = weatherData.hourly.time
    const now = Math.floor(Date.now()/1000) 
    const closest = arrayDates.reduce(function(previous, current) {
        return (Math.abs(current - now) < Math.abs(previous - now) ? current : previous)
    })
    const closestPosition = arrayDates.findIndex((item) => item === closest)
    return closestPosition
}


function getTimeByTimestamp(timestamp) {
    let hour = new Date(timestamp * 1000).getHours()
    hour = hour < 10 ? `0${hour}` : hour
    const minutes = new Date(timestamp * 1000).getMinutes()

    return `${hour}:${minutes}`
}

function getDate() {
    return `${new Date().toLocaleDateString('en-us', {weekday: 'short'})}, ${new Date().getDate()} ${new Date().toLocaleDateString('en-us', {month: 'short'})}`
}

export default function Aside({ weatherData, placeData }) {
    const [closest, setClosest] = useState(findClosest(weatherData))
        
    return (
        <aside className='aside'>
            <div className='header'>
                <div className='title'>
                    <WiCloudy color='#4495EE' fontSize='1.5em'/>
                    <h2>Today</h2>
                </div>
                <div className='subtitle'>
                    <p>
                        {getDate()}
                    </p>
                </div>
            </div>
            <div className='temperature'>
                <div className='thermostat'>
                    <h1>{weatherData.hourly.temperature_2m[closest]}</h1>
                    <p>°C</p>
                </div>
                <p>Feels like 32°C</p>
            </div>
            <small>{placeData[2].long_name}, {placeData[4].long_name}</small>
            <div className='sun'>
                <WiSunrise color='#f2a809' fontSize='25px'/>
                <p>Sunrise {getTimeByTimestamp(weatherData.daily.sunrise[0])}</p>
                <WiSunset color='#dcef0b' fontSize='25px'/> 
                <p>Sunset {getTimeByTimestamp(weatherData.daily.sunset[0])}</p>
            </div>
        </aside>
    )
}

