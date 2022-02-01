import axios from 'axios'

const openMeteorAPI = axios.create({
    baseURL: 'https://api.open-meteo.com/v1/forecast',
    timeout: 15000
})

openMeteorAPI.getForecast = ({latitude, longitude}) => {
    return openMeteorAPI.get(`?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,relativehumidity_2m,apparent_temperature&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset&timeformat=unixtime&timezone=America%2FSao_Paulo`)
}

export default openMeteorAPI