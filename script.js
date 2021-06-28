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
    const data = res.data
    console.log(data)
    showData(data)
    return data

  } catch (error) {
    console.error(error)
  }

}



function showData(data) {

  let conditionIcon = `${data.current.condition.icon}`
  let newIcon = conditionIcon.replace('//', 'https://')
  git 
  let usStates = ""
  if (data.location.country === "United States of America") {
    usStates = data.location.region
  } else {
    usStates = usStates.replace(usStates, "")
  }
  let NightOrDayIMG = ""
  if (data.current.is_day == 0) {
    NightOrDayIMG = "icons8-moon-symbol-30 (1).png"
  }
 else {
   NightOrDayIMG = "icons8-sun-30.png"
   }

  let locData = `

    <div>
    <img class='day-night' src="${NightOrDayIMG}">
      <h4 id='current'>${data.current.condition.text}</h4>
      <img id='icon' src="${newIcon}" alt="">
    </div>
    <p id='city'>${data.location.name}</p>
    <h4 id='country'>${data.location.country}</h4>
    <p id='state'>${usStates}</p>
    <p class='date-time'>date & time<br/>${data.location.localtime}</p>
    <div class='temps'>
      <p id='f'>${data.current.temp_f} °F</p>
      <p id='c'>${data.current.temp_c} °C</p>
    </div>
    <div class='pre-hum'>
      <p id='prec'>precipitation<br />${data.current.precip_in}%</p>
      <p id='humidity'>humidity<br /> ${data.current.humidity}%</p>
    </div>
      <p class='wind'> wind<br/> ${data.current.wind_mph} mph <br/>${data.current.wind_kph} kph </p>
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

function removeData() {
  const dataCon = document.querySelector('#show-data')
  while (dataCon.lastChild) {
    dataCon.removeChild(dataCon.lastChild)
  }
}










