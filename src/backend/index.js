async function resolveWeatherData(weatherData) {
    // getting the arrays's position of now
    const arrayDates = weatherData.hourly.time
    const now = Math.floor(Date.now()/1000) 
    const closest = arrayDates.reduce(function(previous, current) {
        return (Math.abs(current - now) < Math.abs(previous - now) ? current : previous)
    })
    const closestPosition = arrayDates.findIndex((item) => item === closest)
    console.log(closestPosition)


    const date = weatherData.daily.time
    const minTemp = weatherData.daily.temperature_2m_min
    const maxTemp = weatherData.daily.temperature_2m_max
    const sunrise = weatherData.daily.sunrise
    const sunset = weatherData.daily.sunset
    const weathercode = weatherData.daily.weathercode
    const temperatures = weatherData.hourly.temperature_2m
    const apparentTemperature = weatherData.hourly.apparent_temperature
    

    const response = [
        {
            asideInfos: {
                date: now,
                temperatureNow: temperatures[closestPosition],
                apparentTemperature: apparentTemperature[closestPosition],
                sunrise: sunrise[0],
                sunset: sunset[0],
            }
        },
        {
            firstDay: {
                date: date[0],
                minTemp: minTemp[0],
                maxTemp: maxTemp[0],
                sunrise: sunrise[0],
                sunset: sunset[0],
                weathercode: weathercode[0],
            
            }
        }
    ]

    console.log(response)
    
    return response
    
}

export default resolveWeatherData;


