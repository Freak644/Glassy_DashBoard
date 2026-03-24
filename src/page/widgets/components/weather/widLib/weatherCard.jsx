import { useEffect, useState } from "react"
import { database } from "../../../../../lib/globalState";
import AskCity from "./readCity";
import CursorImg from '../../../../../assets/cursor.png';
import windGif from '../../../../../assets/WindGif.gif';

export default function WeatherCard() {
    const myData = database(stat=> stat.db?.weatherWid);
    
    let [weatherData,setData] = useState({});

    const featchWeather = async (city, api_key) => {
        let rqst = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`)
        let data = await rqst.json();
        console.log(data)
        setData(data);
    }

    useEffect(()=>{
        if (myData.city.length == 0) return;
        let {city, apiKey} = myData;
        featchWeather(city, apiKey);
        
    }, [myData])

    const getDirection = () => {
        const deg = weatherData?.wind?.deg;
        if (deg == null) return "";

        const directions = ["N","NE","E","SE","S","SW","W","NW"];
        const index = Math.round(((deg % 360) + 360) % 360 / 45) % 8;

        return directions[index];
    };
    return(
        <div className="underTaker">
            {myData?.city.length === 0 ? <AskCity crntData={myData} /> :
            <>
                {Object.keys(weatherData).length === 0 ? <div className="loader"></div> :
                <>
                <div className="imgDiv h-25 w-25 absolute top-1 left-1">
                    <img src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} alt="" />
                </div>

                <p className="absolute left-27 top-3.5 font-bold text-4xl">{Math.round(weatherData.main.temp)}<span className="text-lg absolute top-0">℃</span></p>
                <p className="absolute p-1 w-50 right-1 flex items-center flex-col top-5.5 text-lg font-semibold">{`${"📍"+weatherData.name}`} <span className="text-[15px] text-gray-400!">{weatherData.weather[0].description.toUpperCase()}</span></p>
                <div className=" h-30 relative top-12 w-full left-1/7">
                    <span className="absolute top-1 left-2.5 font-semibold text-[14px]">Wind🍃</span>
                    <div className="flex items-center flex-col p-1 gap-2.5 absolute top-8 left-2.5">
                        <img src={CursorImg} className="h-10! w-10!"
                        style={{
                            transform: `rotate(${Math.round(weatherData.wind.deg)}deg)`
                        }} alt="" />
                        {getDirection()}
                    </div>

                    <div className="flex items-center flex-col gap-2 top-1.5  w-25 left-2/5 absolute">
                        <img src={windGif} className="h-18! w-15!" alt="" />
                        <span>Speed💨 {weatherData.wind.speed}</span>
                    </div>
                </div>
                </>}
            </>
            }
        </div>
    )
}