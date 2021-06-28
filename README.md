# Project Overview

# Blue Sky Weather Website

 deployed URL.

## Project Description

A website that simply provides current information about the weather of a location. It also includes the name of the country of the searched location if it is a city and date and the local time as well.
## API and Data Sample

https://www.weatherapi.com/

Sample : 
https://api.weatherapi.com/v1/current.json?key=25f100a5c9ee4976bd115634212106&q=London

JSON :

{

    "location": {
        "name": "Cologne",
        "region": "Nordrhein-Westfalen",
        "country": "Germany",
        "lat": 50.93,
        "lon": 6.95,
        "tz_id": "Europe/Berlin",
        "localtime_epoch": 1624304870,
        "localtime": "2021-06-21 21:47"
    },
    "current": {
        "last_updated_epoch": 1624303800,
        "last_updated": "2021-06-21 21:30",
        "temp_c": 17.0,
        "temp_f": 62.6,
        "is_day": 1,
        "condition": {
            "text": "Partly cloudy",
            "icon": "//cdn.weatherapi.com/weather/64x64/day/116.png",
            "code": 1003
        },
        "wind_mph": 6.9,
        "wind_kph": 11.2,
        "wind_degree": 20,
        "wind_dir": "NNE",
        "pressure_mb": 1012.0,
        "pressure_in": 30.4,
        "precip_mm": 0.0,
        "precip_in": 0.0,
        "humidity": 77,
        "cloud": 75,
        "feelslike_c": 17.0,
        "feelslike_f": 62.6,
        "vis_km": 10.0,
        "vis_miles": 6.0,
        "uv": 3.0,
        "gust_mph": 9.6,
        "gust_kph": 15.5
    }
}




## Wireframes

https://wireframe.cc/lSJ1TR


### MVP/PostMVP
### MVP :
- A working form (search bar) with a submit button to retrieve information about searched location.
- Using a reliable API to provide the most current information about the location users search.
- A function that deletes the last searched location from the search bar to make it ready for additional searches.  (user friendly)
- Using appropriate CSS properties to display the website on different screen sizes (Cell phones, tablets and desktops
- Render data on the page properly and in a readable form.
### PostMVP
- Providing additional information about users input
- Including a nav bar

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|June 21| Prompt / Wireframes / Priority Matrix / Timeframes | Complete
|June 22| Project Approval / Core Application Structure (HTML, CSS, etc.) | Complete
|June 23| Pseudocode / actual code | complete
|June 24| Initial Clickable Model  | complete
|June 25| MVP | complete
|June 28| Presentations | Incomplete

## Priority Matrix

https://app.conceptboard.com/board/zedt-nxhr-rcag-xi7k-3gso#



## Timeframes

Tell us how long you anticipate spending on each area of development. Be sure to consider how many hours a day you plan to be coding and how many days you have available until presentation day.

Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Throughout your project, keep track of your Time Invested and Actual Time and update your README regularly.

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| HTML Structure: Adding Axios, CSS file, JavaScript file, title, new font | H | 3hrs | 2hrs | 2hrs |
| Adding Navigation bar into HTML | L | 3hrs |3hrs |3hrs|
| Adding Form into HTML| H | 3.5hrs| 3.5hrs | 3.5hrs |
| Adding footer to the HTML: 2 images and a text | H | 3hrs |3hrs |3hrs|
| CSS Structure | H | 3hrs | 3hrs| 3hrs|
| Async Function for API Calls| H | 3.5hrs | 4hrs| 4hrs| 4hrs| 
| Function to append returned data from API to the HTML using AdjacentHTML in JavaScript | H | 3hrs| 5hrs | 5hrs|
| Attach an EventListener to log user input(location) | H | 3.5hrs |4hrs | 4hrs| 
| Function to remove the user input after the search  | H | 3hrs |3hrs | 3hrs| 
| Styling contents of the page and the returned data using flex feature of CSS | H | 3hrs | 6hrs|6hrs | 
| Adding media query for when screen gets larger than 500px  | H | 3.5hrs |3hrs| 3hrs| 
| Adding day/night icons to tha data card. | H | 1.5hrs| 2hrs| 2hrs|
| Check to see MVP requirements are met | H | 2.5hrs |2hrs|2hrs|
| Total | H | 39hrs| 43.5hrs | 43.5hrs |

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of and a brief description.  

```
let NightOrDayIMG = ""
  if (data.current.is_day === 0) {
    NightOrDayIMG = "icons8-moon-symbol-30 (1).png"
  }
 else {
   NightOrDayIMG = "icons8-sun-30.png"
   }
    // The result of this if statement is that if there is day time at the user seached location a little sun icon will be appeared with other data and if there is night, a moon icon will be shown.
```

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.  
