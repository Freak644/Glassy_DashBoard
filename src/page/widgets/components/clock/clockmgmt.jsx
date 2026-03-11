import AnalogClock from "./anaLogClock";
import DigitalClock from "./digitalClock";

export default function ClockMgmt({Obj}) {
  return(
    <div className={`blurBg absolute h-55 w-80 flex items-center justify-center text-white`}>
      {1!=1 && <DigitalClock/>}
      {1==1 && <AnalogClock/>}
    </div>
  )
}