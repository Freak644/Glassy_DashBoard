import { toggler } from "../../lib/globalToggles";
import HandleBGUpload from "../../utils/Handlebg";
import ClockMgmt from "./components/clock/clockmgmt";
import SearchBar from "./components/searchBox";
import { useEffect, useState } from "react";
import DraggableWidget from "../../utils/dragDropHelper";
import { database } from "../../lib/globalState";
import BaseWeather from "./components/weather/baseComp";

export default function Widgets() {
  const toggleVideo = toggler((stat) => stat.toggleVideo);
  const toggleEdit = toggler(stat=> stat.toggleEdit)
  const { toggleTab } = toggler();
  const {db, setDB} = database();
  let {clockWid, searchWid, weatherWid} = db;

  const [positions, setPositions] = useState({clockWid, searchWid, weatherWid});

  useEffect(()=>{
    let {clockWid, searchWid} = positions;
    let data = {clockWid,searchWid}
    setDB({data,isGet:false})
  },[positions])

  return (
    <div className="thonePrincess z-10 bg-transparent relative h-screen w-screen">

      {toggleEdit && (
        <div
          onClick={() => toggleTab({ toggleEdit: false })}
          className="bg-white/20 flex items-center justify-center absolute top-0.5 left-[48%] cursor-pointer hover:bg:black/10 p-4 backdrop-blur-2xl rounded-full h-15 w-15"
        >
          <i className="bx bx-x text-2xl text-white"></i>
        </div>
      )}

     {positions?.searchWid.isVisible && <DraggableWidget 
        id="searchWid"
        position={positions.searchWid.position}
        setPositions={setPositions}
        toggleEdit={toggleEdit}
     >
        <SearchBar />
     </DraggableWidget>}

     {positions?.clockWid.isVisible && <DraggableWidget
        id="clockWid"
        position={positions.clockWid.position}
        setPositions={setPositions}
        toggleEdit={toggleEdit}
    >
        <ClockMgmt />
    </DraggableWidget>}

    {positions?.weatherWid?.isVisible && <DraggableWidget
        id="weatherWid"
        position={positions.weatherWid.position}
        setPositions={setPositions}
        toggleEdit={toggleEdit}
    >
      <BaseWeather API={positions.weatherWid.apiKey} />
    </DraggableWidget>}

      {toggleVideo && <HandleBGUpload />}
    </div>
  );
}