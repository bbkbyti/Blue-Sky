// api website and key
const DOMAIN = "https://api.weatherapi.com/v1/current.json?key="
const API_KEY = "99f526f6d08d401482d133835212206"
const BASE_URL = `${DOMAIN}${API_KEY}&q=`

// make a request from API 
async function locData(location) {
    const url = `${BASE_URL}${location}`
    try {
        const res = await axios.get(url)
        console.log(res)
        
    } catch (error) {
        console.error(error)
        }
}
locData('istanbul')

