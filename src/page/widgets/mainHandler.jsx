import HandleVidoe from "../Inporter/HandlebgVdieo";
import ClockMgmt from "./components/clock/clockmgmt";

export default function Widgets({data}) {
    
    return(
        <div className="thonePrincess z-10 bg-transparent">
            <ClockMgmt />
            <HandleVidoe/>
        </div>
    )
}