import { useEffect, useRef, useState } from "react"
import { database } from "../../../lib/globalState";

export default function WeatherColtroller ({crntData, setData}) {
    let {weatherWid} = crntData;

    const [builDerLocalData, setIntoLocalData] = useState(crntData);
    const inputRef = useRef(null);

    const changeName =  (inp) => {
            let value = inp.value;
            if (!value || !value.trim()) return;
            
            setIntoLocalData(prev=>({
                ...prev,
                ["name"]:{
                    ...prev["name"],
                    username:value
                }
            }))
        }
    
        useEffect(()=>{
            if (!inputRef || inputRef=== null) return;
            let inp = inputRef.current;
            
            inp.addEventListener("keydown", (e) => {
                if (e.key === "Enter") {
                    changeName(e.target);
                }
            });
        },[]);
    return(
        <>
            <p className="headingP">🌤️ Weather</p>

            <div className="controlleBox">
                <div className="leftaSideC">
                    <div className="iconCon">🌨️</div>
                    <div className="textHolder">
                        <p>Show Weather</p>
                        <span>Display weather card</span>
                    </div>
                </div>

                <div className="rightaSideC">
                    <button>
                        <p></p>
                    </button>
                </div>
            </div>
            <div className="controlleBox justify-start! border-none!">
                <div className="leftaSideC">
                    <div className="iconCon">🗝️</div>
                    <div className="textHolder">
                        <p>Enter your OpenWeather key</p>
                        <span>Display weather card</span>
                    </div>
                </div>
                <div className="rightSideC">
                    <a className="text-sm text-blue-600! hover:text-blue-300!" href="https://www.youtube.com/watch?v=FWuRLS_wmWY">🗝️Get key</a>
                </div>
            </div>
            <div className="inputDivBtn">
                <input ref={inputRef} type="text" />
                <button>Save</button>
            </div>

            <div className="controlleBox justify-start! border-none!">
                <div className="leftaSideC">
                    <div className="iconCon">🗝️</div>
                    <div className="textHolder">
                        <p>Enter your city name</p>
                        <span>Fetch Weather for your city</span>
                    </div>
                </div>

            </div>
            <div className="inputDivBtn">
                <input ref={inputRef} type="text" />
                <button>Save</button>
            </div>
        </>
    )
}