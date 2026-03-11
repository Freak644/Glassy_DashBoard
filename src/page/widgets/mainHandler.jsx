import { toggler } from "../../lib/globalToggles";
import HandleVidoe from "../../utils/bgHandler/HandlebgVdieo";
import ClockMgmt from "./components/clock/clockmgmt";

export default function Widgets({data}) {
    const isHanler = toggler(stat=> stat.toggleVideo);
    return(
        <div className="thonePrincess z-10 bg-transparent">
            <ClockMgmt />
            {isHanler && <HandleVidoe/>}
        </div>
    )
}