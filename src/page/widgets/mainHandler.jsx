import { toggler } from "../../lib/globalToggles";
import HandleBGUpload from "../../utils/Handlebg";
import ClockMgmt from "./components/clock/clockmgmt";
import SearchBar from "./components/searchBox";

export default function Widgets({data}) {
    const {toggleVideo, toggleEdit} = toggler(stat=> stat);
    const {toggleTab} = toggler();
    return(
        <div className="thonePrincess z-10 bg-transparent">
            {toggleEdit && <div onClick={()=>{
                toggleTab({toggleEdit:false})
            }} className="bg-white/20 flex items-center justify-center absolute top-0.5 left-[48%] cursor-pointer hover:bg:black/10 p-4 backdrop-blur-2xl rounded-full h-15 w-15"><i className="bx bx-x text-2xl text-white "></i></div>}
            
            <div className="searchWid p-1 absolute">
                {toggleEdit && <div className="moverDiv">
                    <i className="bx bxs-grid"></i>
                    <i className="bx bx-x"></i>
                </div>}
                <SearchBar/>
            </div>
            
            <ClockMgmt />
            {toggleVideo && <HandleBGUpload/>}
        </div>
    )
}