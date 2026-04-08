import { database } from "../../../lib/globalState"

export default function BookmarkList() {
    const bookList = database(stat=> stat.db.bookmarks);

    return(
        <div className="underTaker ">

            {
                Object.entries(bookList).map(([category, itmes]) => {
                    console.log(category,itmes)
                })
            }
        </div>
    )
}