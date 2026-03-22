import WeatherAPI from "./widLib/apiHelder";

export default function BaseWeather({API, setData}) {
    
    return(
        <div className="blurBg relative h-52 w-80">
            {API.length === 0 ? <WeatherAPI setData={setData}/> : <></>}
        </div>
    )
}