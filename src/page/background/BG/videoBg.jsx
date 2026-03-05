import defaultVid from '../../../assets/defaultVid.mp4'
export default function VideoBg({blogUrl}) {
    
    return(
        <div className="underTaker">
            <video className="bg-video" autoPlay muted loop>
                <source type="video/mp4" src={blogUrl || defaultVid} />
            </video>
        </div>
    )
}