import { useState } from "react"

export default function FranApp ({crntList, setData}) {
    
    const [builDerLocalData, setIntoLocalData] = useState(crntList);

    return(
        <>
            <p className="headingP">🤖 Home App's</p>
            
            <div className="controlleBoxA">

            </div>
            <div className="controlleBoxA">

            </div>
            <div className="controlleBoxA">

            </div>
        </>
    )
}