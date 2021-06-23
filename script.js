// api website and key
const DOMAIN = "https://api.weatherapi.com/v1/current.json?key="
const API_KEY = "99f526f6d08d401482d133835212206"
const BASE_URL = `${DOMAIN}${API_KEY}&q=`

// make a request from API 
async function locData(location) {
    const url = `${BASE_URL}${location}`
    try {
        const res = await axios.get(url)
        // console.log(res.data.location.name)
        const data = res.data
        console.log(data)
        showData(data)
        return data
        
    } catch (error) {
        console.error(error)
        }
    
}
locData('lisbon')

function showData(data){
    const dataContainer = document.querySelector('#show-data')

    let locData = `
    <h2>${data.location.name}</h2>
    <h4>country: ${data.location.country}</h4>
    <h3>temperature F: ${data.current.temp_f}</h3>
    <h3>temperature C: ${data.current.temp_c}</h3>
    <h4>precipitation: ${data.current.precip_in}% </h4>
    <h5>humidity: ${data.current.humidity}</h5>
    <h5>wind (mph): ${data.current.wind_mph}mph</h5>
    <h5>wind (kph): ${data.current.wind_kph}kph</h5>
    <h5>date and local time: ${data.location.localtime}</h5>
    `
    dataContainer.insertAdjacentHTML('beforeend', locData)
    return locData

}
    

    
    

// function to display the time icon of the location and an image to show it is day or night time.
// const locationName = (data) => {
//     let conditionIcon = `${data.current.condition.icon}`
//     let newIcon = conditionIcon.replace('//', 'https://')
//     console.log(newIcon)
//     let dayNightImage = ""
//      if (data.current.is_day === 1) {
//          dayNightImage = "https://png.pngtree.com/png-vector/20190826/ourlarge/pngtree-clear-sky-in-the-daytime-png-image_1699567.jpg"
//      } else {
//          dayNightImage = "https://i.pinimg.com/474x/84/85/55/848555292218dc1cfdb32b3fc8dbf57e.jpg"
//      }
// }
// locationName('istanbul')



