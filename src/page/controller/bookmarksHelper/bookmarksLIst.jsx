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
        <div className="underTaker items-start! my-scroll">
            <div className="searchBox w-[98%] shadow shadow-black/25 rounded-lg h-25 relative top-0
            mt-2.5 flex items-start flex-col gap-2">
  
                    <i className="bx sticky bxs-left-arrow-circle p-2.5 shadow shadow-amber-50 text-2xl blurBg rounded-lg"></i>
                    
                    <div className="p-1 flex items-center gap-3.5 w-full ">
                        <input type="text" placeholder="Type To Search..." className="h-10 pl-3 rounded-lg w-3/5 border shadow shadow-amber-50/20
                        ml-10" />
                        <select name="" id="shortBy" className="blurBg">
                            <option value={null}>
                                Sort by 
                            </option>
                            {
                                Object.entries(bookList).map(([category]) => 
                                    <option value={category} key={category}>
                                        {category}
                                    </option>
                                )
                            }
                        </select>
                    </div>

               

            </div>
            {
                // Object.entries(bookList).map(([category, itmes]) => {
                //     console.log(category,itmes)
                // })
            }
        </div>
    )
}