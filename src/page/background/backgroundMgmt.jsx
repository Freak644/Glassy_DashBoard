import { database } from "../../lib/globalState";
import ImageBg from "./BG/imageBg";
import VideoBg from "./BG/videoBg";

export default function BackGround() {
    const data = database(stat=>stat.db)
    return(
        <div className="thonePrincess">
            {data?.background?.type == "video" ? <VideoBg isBlur={data.background.isBlur}/> :
            <ImageBg />}
        </div>
    )
}