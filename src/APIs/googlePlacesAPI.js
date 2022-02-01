import axios from 'axios'

const googlePlacesAPI = axios.create({
    baseURL: 'https://maps.googleapis.com/maps/api/',
    timeout: 1000
})

googlePlacesAPI.getPlacesData = ({latitude, longitude}) => {
    return googlePlacesAPI.get(`geocode/json?latlng=${latitude},${longitude}&language=en&key=${process.env.REACT_APP_GOOGLE_API_KEY}`)
}

export default googlePlacesAPI