import { useEffect, useState } from 'react'
import defaultVid from '../../../assets/defaultVid.mp4'
export default function VideoBg({isBlur}) {
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
    }, []);

    useEffect(()=>{
        console.log(blogUrl)
    },[blogUrl])

    return(
        <div className="underTaker">
            <video key={blogUrl} className="bg-video" autoPlay muted loop src={blogUrl || defaultVid}>
            </video>
            {isBlur && <div className="blurBg z-2! h-full w-full absolute top-0 left-0"></div>}
        </div>
    )
}