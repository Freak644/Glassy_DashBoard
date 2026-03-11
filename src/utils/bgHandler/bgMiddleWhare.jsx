import { useState } from "react";
import HandleImage from "./HandleImage";
import Handlevideo from "./HandlebgVdieo";

export default function BackGroundMW() {
    const [selection,setSelection] = useState({
        image:false,
        video:false
    });

    return(
        <div className="underTaker z-11 blurBg">
            { !selection.image && !selection.video ?
                <div className="h-6/10 w-5/10 flex items-center flex-col gap-2.5 font-bold text-2xl absolute left-1/4
                bg-black/20 backdrop-blur-2xl rounded-lg  top-1/5
                ">
                    <p className="mt-20">Choose! A background Type</p>
                    <div className="flex items-center justify-center gap-3">
                        <button className="liquedBtn" >Image</button> 
                        <button className="liquedBtn" >Video</button>
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