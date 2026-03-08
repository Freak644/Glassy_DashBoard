import { useEffect, useRef } from "react";

export default function AnalogClock() {
    let isCalled = false;
    const secondRef = useRef(null);
    const minuteRef = useRef(null);
    const hourRef = useRef(null);

useEffect(() => {

    const handleTime = () => {
        if(!secondRef.current || !minuteRef.current || !hourRef.current) return;
        const now = new Date();

        const seconds = (now.getSeconds() + now.getMilliseconds() / 1000) * 6;
        const minute = now.getMinutes() * 6 + now.getSeconds() * 0.1;
        const hours = (now.getHours() % 12) * 30 + now.getMinutes() * 0.5;

        secondRef.current.style.transform = `rotate(${seconds}deg)`;
        minuteRef.current.style.transform = `rotate(${minute}deg)`;
        hourRef.current.style.transform = `rotate(${hours}deg)`;
    };

    let timeInterval = setInterval(handleTime, 50);

    return () => clearInterval(timeInterval);

}, []);

    return(
        <div  id="clock-body" class="blurBg" >
                    <span id="thre" class="cont">3</span>
                    <span id="six" class="cont">6</span>
                    <span id="nin" class="cont">9</span>
                    <span id="twe" class="cont">12</span>
                   
                    <div id="midleC"></div>
                    <div ref={secondRef} id="sec" class="ned"><h3></h3></div>
                    <div ref={minuteRef} id="min" class="ned"><h3></h3></div>
                    <div ref={hourRef} id="ho" class="ned"> <h3></h3></div>
        </div>
    )
}