import { useEffect, useRef } from "react";


export default function AnalogClock() {

  const secondsRef = useRef(null);
  const minutesRef = useRef(null);
  const minuteRef = useRef(null);
  const hourRef = useRef(null);

  useEffect(() => {

    const seconds = secondsRef.current;
    const minutes = minutesRef.current;
    const minute = minuteRef.current;
    const hour = hourRef.current;

    // create spikes
    for (let s = 0; s < 60; s++) {

      const mSpike = document.createElement("i");
      const sSpike = document.createElement("i");

      mSpike.className = "spike";
      sSpike.className = "spike";

      mSpike.style.setProperty("--rotate", `${6 * s}deg`);
      sSpike.style.setProperty("--rotate", `${6 * s}deg`);

      mSpike.setAttribute("data-i", s);
      sSpike.setAttribute("data-i", s);

      minutes.appendChild(mSpike);
      seconds.appendChild(sSpike);
    }

    function getTime() {

      const date = new Date();
      const s = date.getSeconds();
      const m = date.getMinutes();

      hour.textContent = date.getHours();
      minute.textContent = m;

      minutes.style.setProperty("--dRotate", `${6 * m}deg`);
      seconds.style.setProperty("--dRotate", `${6 * s}deg`);

      seconds.classList.toggle("stop-anim", s === 0);
      minutes.classList.toggle("stop-anim", m === 0);
    }

    getTime();
    const interval = setInterval(getTime, 1000);

    return () => clearInterval(interval);

  }, []);

  return (

    <div className="bg-black h-90 w-90 flex items-center justify-center text-white">

      <div className="clock">

        <div ref={secondsRef} className="seconds"></div>

        <div ref={minutesRef} className="minutes"></div>

        <div ref={minuteRef} className="minute">00</div>

        <div ref={hourRef} className="hour">00</div>

      </div>

    </div>
  );
}