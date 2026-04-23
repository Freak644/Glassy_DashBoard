
import { toggler } from "../../lib/globalToggles";
import BookmarkList from "./bookmarksHelper/bookmarksLIst";

export default function MainBookmark() {
    const bookmark = toggler(stat=>stat.toggleBookmarks);

    return(
        <>
            {bookmark && <div className="thornPrincess inCommingAnim flex items-center justify-center bg-white/5 backdrop-blur-lg z-20">
                <BookmarkList/>
            </div>}
        </>
    )
}