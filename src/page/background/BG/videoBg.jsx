
import defaultVid from '../../../assets/defaultVid.mp4'
export default function VideoBg({isBlur,blogUrl}) {

    return(
        <div className="underTaker">
            <video className="bg-video" autoPlay muted loop src={blogUrl || defaultVid}>
            </video>
            {isBlur && <div className="blurBg z-2! h-full w-full absolute top-0 left-0"></div>}
        </div>
    )
}