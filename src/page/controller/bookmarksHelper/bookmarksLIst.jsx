import { useEffect } from "react";
import { database } from "../../../lib/globalState"

export default function BookmarkList() {
    const bookList = database(stat=> stat.db.bookmarks);

    // useEffect(()=>{
    //     Object.entries(bookList).map(([category, itmes]) => {
    //                 console.log(category,itmes)
    //             })
    // },[])
    return(
        <div className="underTaker items-start!">
            <div className="searchBox w-[98%] shadow shadow-black/25 rounded-lg h-25 relative top-0
            mt-2.5">
                <input type="text" placeholder="Type To Search..." className="h-10 pl-3 rounded-lg w-3/5 border shadow shadow-amber-50/20" />

            </div>
            {
                // Object.entries(bookList).map(([category, itmes]) => {
                //     console.log(category,itmes)
                // })
            }
        </div>
    )
}