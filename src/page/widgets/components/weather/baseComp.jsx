import WeatherAPI from "./widLib/apiHelder";
import WeatherCard from "./widLib/weatherCard";

export default function BaseWeather({API, setData}) {
    
    return(
        <div className="blurBg relative h-55 w-90">
            {API.length === 0 ? <WeatherAPI setData={setData}/> : <WeatherCard/>}
        </div>
    )
}