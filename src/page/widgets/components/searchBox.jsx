export default function SearchBar({positionObj}) {
    
    return(
        <div className="underTaker">
            <div className="blurBg search">
                <p id="greet">Wellcome! Freak</p>
                <form action="" onsubmit="">
                    <input type="text" name="query" placeholder="Find or Enter URL" />
                    <i className="bx bx-search-alt"></i>
                </form>
            </div>
        </div>
    )
}