export default function ContainerStructure ({crntData = {}}) {
    const {name, searchWid} = crntData;
    return(
        <>
            <p className="p-1 border-b border-gray-400/30 w-full 
            text-[11px] font-semibold">👋 Greeting & 📦Search Box</p>

            <div className="controlleBox">
                <div className="leftaSideC">
                    <p>Show Greeting</p>
                    <span>Display Greeting message</span>
                </div>
                <div className={`rightaSideC ${searchWid.isVisible ? "Active" : ""}`}>
                    <button>
                        <p/>
                    </button>
                </div>
            </div>
            <div className="controlleBox">
                <div className="leftaSideC">
                    <p>Display Name</p>
                    <span>Display Greeting message</span>
                </div>
                <div className={`rightaSideC ${name.isVisible ? "Active" : ""}`}>
                    <button>
                        <p/>
                    </button>
                </div>
            </div>

            <div className="inputDiv">
                <input type="text" placeholder={name} />
            </div>
        </>

    )
}