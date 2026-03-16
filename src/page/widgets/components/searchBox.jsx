import { toggler } from "../../../lib/globalToggles"

export default function SearchBar() {

    return(  
         <div className="blurBg search">
            
             <p id="greet">Wellcome! Freak</p>
             <form action="" onsubmit="">
                 <input autoComplete="off" type="text" name="query" placeholder="Find or Enter URL" />
                 <i className="bx bx-search-alt"></i>
             </form>
         </div>
    )
}