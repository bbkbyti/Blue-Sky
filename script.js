// api website and key
const DOMAIN = "https://api.weatherapi.com/v1/current.json?key="
const API_KEY = "99f526f6d08d401482d133835212206"
const BASE_URL = `${DOMAIN}${API_KEY}&q=`
const dataContainer = document.querySelector('#show-data')
// make a request from API 
async function locData(location) {
    const url = `${BASE_URL}${location}`
    try {
        const res = await axios.get(url)
        // console.log(res.data.location.name)
        const data = res.data
        console.log(data)
        showData(data)
        // locImage(data)
        return data
        
    } catch (error) {
        console.error(error)
        }
    
}
// locData('sydney')


function showData(data){
    
    let conditionIcon = `${data.current.condition.icon}`
    let newIcon = conditionIcon.replace('//', 'https://')
    // console.log(newIcon)
    let usStates = ""
    if (data.location.country === "United States of America"){
        usStates = data.location.region
    } else{
        usStates = usStates.replace(usStates, "")
    }



    let locData = `
    
    <div id='upper'>
      <h4 id='current'>${data.current.condition.text}</h4>
      <img id='icon' src="${newIcon}" alt="">
    </div>

    <p id='city'>${data.location.name}</p>
    
    <h4 id='country'>${data.location.country}</h4>
    <h4>${usStates}</h4>
    <div class='temps'>
      <p id='f'>${data.current.temp_f} °F</p>
      <p id='c'>${data.current.temp_c} °C</p>
    </div>

    <h4>precipitation:${data.current.precip_in}%</h4>
    <h5>humidity: ${data.current.humidity}%</h5>
    <h5>wind (mph): ${data.current.wind_mph} mph</h5>
    <h5>wind (kph): ${data.current.wind_kph} kph</h5>
    <h5>date and local time: ${data.location.localtime}</h5>
    
    
    `
    dataContainer.insertAdjacentHTML('beforeend', locData)
    return locData
}



// Dynamically search locations using HTML form with event listener

const form = document.querySelector('.form')
form.addEventListener('submit', (e) => {
    e.preventDefault()
    const inputValue = document.querySelector('#loc').value
    // console.log(inputValue)
    removeData()
    locData(inputValue)
    document.querySelector('#loc').value = ''
})

// function to remove last search

function  removeData(){
    const dataCon = document.querySelector('#show-data')
    while(dataCon.lastChild) {
        dataCon.removeChild(dataCon.lastChild)
    }
}


    

    
    




