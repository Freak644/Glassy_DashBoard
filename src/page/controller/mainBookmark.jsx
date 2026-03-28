
import { toggler } from "../../lib/globalToggles";
import BookmarkList from "./bookmarksHelper/bookmarksLIst";

export default function MainBookmark() {
    const bookmark = toggler(stat=>stat.toggleBookmarks);

    return(
        <>
            {bookmark && <div className="thornPrincess inCommingAnim blurBg z-20">
                <div className="h-full w-full grid grid-rows-2 grid-cols-7">
                    <div className="temp col-span-5 row-span-2">
                        <BookmarkList/>
                    </div>
                    <div className="temp col-span-2 ">
                        1
                    </div>
                    <div className="temp col-span-2">
                        1
                    </div>
                </div>
            </div>}
        </>
    )
}