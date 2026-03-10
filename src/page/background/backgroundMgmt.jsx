import { useEffect, useState } from "react";
import { database } from "../../lib/globalState";
import ImageBg from "./BG/imageBg";
import VideoBg from "./BG/videoBg";
import { useScroll } from "framer-motion";

export default function BackGround() {
    const data = database(stat=>stat.db?.background)
    const [blogUrl,setVideo] = useState("");
    useEffect(() => {
        const request = indexedDB.open("videoDB", 2);
        let url;

        request.onsuccess = evnt => {
            const db = evnt.target.result;
            const tx = db.transaction("videos", "readonly");
            const store = tx.objectStore("videos");

            const getRequest = store.get("backgroundVideo");

            getRequest.onsuccess = () => {
            const blogVideo = getRequest.result;
            if (!blogVideo) return;

            url = URL.createObjectURL(blogVideo);
            setVideo(url);
            };
        };

        return () => {
            if (url) URL.revokeObjectURL(url);
        };
    }, [data]);
    return(
        <div className="thonePrincess">
            {data?.type == "video" ? <VideoBg isBlur={data.isBlur} blogUrl={blogUrl}/> :
            <ImageBg />}
        </div>
    )
}