import { toggler } from "../../lib/globalToggles"

export default function Controller({settings}) {
    let {toggleTab} = toggler();
    const handleBg = ()=>{
        toggleTab({toggleVideo:true})
    }
    return(
        <div id="controlPanel" className="blurBg z-20">
            <ul>
                <li><i className='bx bxs-bookmark-heart' ></i>BM</li>
                <li value={null} onClick={handleBg}><i id="null" className="bx bx-image"></i>BG</li>
                <li><i className="bx bx-time"></i>Clock</li>
                <li><i className="bx bx-edit"></i>Edit</li>
                <li><i className="bx bxs-cog"></i>sys</li>
                <li><a href="https://github.com/Freak644/Glassy_DashBoard"><i className='bx bxl-github' ></i></a>Repo</li>
            </ul>
        </div>
    )
}

