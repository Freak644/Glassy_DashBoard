import { useState } from "react";
import { database } from "../../../lib/globalState"
import { toggler } from "../../../lib/globalToggles"

export default function SearchBar() {
    const {username} = database(stat=> stat.db.name);
    let {setDB} = database();
    const [isEdit,setEdit] = useState(false);
    
    const handle = (evnt)=> {
        evnt.preventDefault()
        let formData = new FormData(evnt.target);
        let {newName} = Object.fromEntries(formData)
        let data = {
            name:{
                username:newName
            }
        }
        setDB({data,isGet:false})
        setEdit(false)
    }
    return(  
         <div className="blurBg search">
             { isEdit ? <form action="" className="absolute! top-0!" onSubmit={handle}>
                <input autoComplete="off" type="text" name="newName" placeholder="Enter your nickname" />
             </form> :
             <p id="greet">Wellcome! {username} { username === "User" && <i onClick={()=> setEdit(true)} className="bx bx-pencil cursor-pointer"></i>}</p>
             }
             <form action="" onsubmit="">
                 <input autoComplete="off" type="text" name="query" placeholder="Find or Enter URL" />
                 <i className="bx bx-search-alt"></i>
             </form>
         </div>
    )
}