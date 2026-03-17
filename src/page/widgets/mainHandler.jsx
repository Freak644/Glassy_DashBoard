import { toggler } from "../../lib/globalToggles";
import HandleBGUpload from "../../utils/Handlebg";
import ClockMgmt from "./components/clock/clockmgmt";
import SearchBar from "./components/searchBox";
import { useState } from "react";
import DraggableWidget from "../../utils/dragDropHelper";

export default function Widgets() {
  const toggleVideo = toggler((stat) => stat.toggleVideo);
  const toggleEdit = toggler(stat=> stat.toggleEdit)
  const { toggleTab } = toggler();

  // ✅ Use x/y instead of top/left (no lag)
  const [positions, setPositions] = useState({
    searchWid: { x: 10, y: 10 },
    clockWid: { x: 10, y: 200 },
    weatherWid: {x:200, y: 10}
  });


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

     <DraggableWidget 
        id="searchWid"
        position={positions.searchWid}
        setPositions={setPositions}
        toggleEdit={toggleEdit}
     >
        <SearchBar />
     </DraggableWidget>

     <DraggableWidget
        id="clockWid"
        position={positions.clockWid}
        setPositions={setPositions}
        toggleEdit={toggleEdit}
    >
        <ClockMgmt />
    </DraggableWidget>

    <DraggableWidget
        id="weatherWid"
        position={positions.clockWid}
        setPositions={setPositions}
        toggleEdit={toggleEdit}
    >

    </DraggableWidget>

      {toggleVideo && <HandleBGUpload />}
    </div>
  );
}