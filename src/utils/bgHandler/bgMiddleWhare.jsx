import { useState } from "react";
import HandleImage from "./HandleImage";
import Handlevideo from "./HandlebgVdieo";

export default function BackGroundMW() {
    const [selection,setSelection] = useState({
        image:false,
        video:false
    });

    function HandleChoice(evnt) {
        let value = evnt.target.innerHTML;
        setSelection(prev=>({
            ...prev,
            image: value === "Image",
            video: value === "Video"
        }))
    }

    return(
        <div className="underTaker z-11 blurBg">
            { !selection.image && !selection.video ?
                <div className="h-6/10 w-5/10 flex items-center flex-col gap-2.5 font-bold text-2xl absolute left-1/4
                bg-black/50 backdrop-blur-2xl rounded-lg  top-1/5
                ">
                    <p className="mt-20 text-rose-500!">Choose! A background Type</p>
                    <div className="flex items-center justify-center gap-3">
                        <button id="null" onClick={(evnt)=>HandleChoice(evnt)} className="liquedBtn" >Image</button> 
                        <button id="null" onClick={(evnt)=>HandleChoice(evnt)} className="liquedBtn" >Video</button>
                    </div>
                </div> : 
                <>
                    {selection.image && <HandleImage/>}
                    {selection.video && <Handlevideo />}
                </>

            }
        </div>
    )
}