import SearchBox from "./SearchBox";
import OuputBox from "./OuputBox";
import { useState } from "react";


function Weather() {
  let[weatherInfo, setWeatherInfo] = useState({
        city : "Delhi",
        temperature : "32.84",
        description : "haze",
        feelsLike : "37.45", 
        humidity : "55",
        windSpeed : "5.14"
  })
  
  let updateWeatherInfo = (newInfo) => {
    setWeatherInfo(newInfo)
  };


  return (
    <div>
        <h1 style={{textAlign : "center"}}>Weather App by Shivansh</h1>
        <SearchBox updateWeatherInfo = {updateWeatherInfo}/>
        <OuputBox info = {weatherInfo}/>
    </div>
  )
}

export default Weather