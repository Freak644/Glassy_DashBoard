import { useEffect } from "react";
import { database } from "../../../lib/globalState"
import { toggler } from "../../../lib/globalToggles";

export default function BookmarkList() {
    const bookList = database(stat=> stat.db.bookmarks);
    let {toggleTab} = toggler();
    // useEffect(()=>{
    //     Object.entries(bookList).map(([category, itmes]) => {
    //                 console.log(category,itmes)
    //             })
    // },[])
    return(
        <div className="h-full w-full flex items-start gap-2 flex-col my-scroll">
            <div className="searchBox w-[98%] shadow shadow-black/25 rounded-lg h-25 relative top-0
            mt-2.5 flex items-start flex-col gap-2">
  
                    <i onClick={()=>toggleTab({toggleBookmarks:false})} className="bx sticky bxs-left-arrow-circle p-2.5 shadow shadow-amber-50 text-2xl blurBg rounded-lg cursor-pointer"></i>
                    
                    <div className="p-1 flex items-center gap-3.5 w-full ">
                        <input type="text" placeholder="Type To Search..." className="h-10 pl-3 rounded-lg w-3/5 border-none myShadow
                        ml-10" />
                        <select name="" id="shortBy" className="blurBg">
                            <option value={null}>
                                Sort by 
                            </option>
                            {
                                Object.entries(bookList).map(([category]) => 
                                    <option className="bg-black" value={category} key={category}>
                                        {category}
                                    </option>
                                )
                            }
                        </select>
                    </div>

               

            </div>

            <div className="ml-3.5 shadow shadow-gray-700 h-15 w-4/5 rounded-lg relative top-1 flex items-center  flex-row gap-3 p-2.5">
                <p className="font-bold">Add Bookmarks:</p>
                    <input type="text" placeholder="Site:https://www.website.com/" className="h-10 pl-1.5 rounded-lg w-55 text-sm border-2 border-gray-500/50
                        ml-1" />
                        <select name="" id="shortBy" className="blurBg">
                            <option value={null}>
                                ADD IN
                            </option>
                            {
                                Object.entries(bookList).map(([category]) => 
                                    <option className="bg-black" value={category} key={category}>
                                        {category}
                                    </option>
                                )
                            }
                        </select>
                        <button className="liquedBtn">Save</button>
                        <p className="text-white-500! font-bold cursor-pointer hover:underline underline-offset-1 outline-1 outline-amber-100/50
                        p-2 rounded-lg border-amber-50 bg-black/40! hover:scale-97 ml-auto">New Category</p>
            </div>

            <div className="p-2.5 w-full shadow">
                {
                    Object.entries(bookList).map(([category, itmes]) => {
                        console.log(category,itmes)
                    })
                }
                    
            </div>
        </div>
    )
}