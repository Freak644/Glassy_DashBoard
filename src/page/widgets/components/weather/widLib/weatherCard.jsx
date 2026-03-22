import { useEffect, useState } from "react"
import { database } from "../../../../../lib/globalState";
import AskCity from "./readCity";

export default function WeatherCard() {
    const myData = database(stat=> stat.db?.weatherWid);
    
    let [weatherData,setData] = useState({});

    useEffect(()=>{
        if (myData.city.length == 0) return;
        
    }, [])
    return(
        <div className="underTaker">
            {myData?.city.length === 0 && <AskCity crntData={myData} />}
        </div>
    )
}