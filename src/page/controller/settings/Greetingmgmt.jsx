export default function GreenCoroller () {

    return(
        <div className="controllerContainer">
            <p className="p-1 border-b border-gray-400/30 w-full 
            text-[11px] font-semibold">👋 Greeting & 📦Search Box</p>

            <div className="controlleBox">
                <div className="leftaSideC">
                    <p>Show Greeting</p>
                    <span>Display Greeting message</span>
                </div>
                <div className="rightaSideC">
                    <button>
                        <p/>
                    </button>
                </div>
            </div>

            <div className="controlleBox">
                <div className="leftaSideC">
                    <p>Search Container</p>
                    <span>Container toggler</span>
                </div>
                <div className="rightaSideC">
                    <button>
                        <p/>
                    </button>
                </div>
            </div>

            
        </div>
    )
}