import { useRef, useState } from "react"

export default function HandleVidoe() {
    const [vidoe,file] = useState({
        objUrl:"",
        file:null
    });

    const videoElRef = useRef(null);

    const handleVideo = (file) => {
        if (!file) return;

    }

    return(
        <div className="underTaker">
            <div className="notVidoe">
                <input type="file" id="file" name="file" />
                <label htmlFor="file"><i className="bx bxs-file"></i> Selct a file or just drag it here</label>
            </div>
        </div>
    )
}