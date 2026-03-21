import { useState } from "react"

export default  function WeatherAPI() {
    const [result, setResult] = useState({
        isResult:false,
        isTrue:false
    })
    return(
        <div className="underTaker bg-gray-700 gap-1.5 rounded-lg flex-col!">
            <p className="font-bold text-2xl">Please Create an API key</p>
            <p className="flex items-center justify-center p-1">
                <i className="bx bxl-youtube text-3xl text-red-600!"></i>
                <a href="">Click Here</a>
            </p>
            <form action="" className="p-1 flex items-center flex-col">
                <div className="flex items-center flex-row p-1 w-full gap-2.5">
                    <input type="text" placeholder="API Key" className={`p-1 w-50 pl-2.5 border rounded-lg 
                        ${(result.isResult && result.isTrue) ? "border-green-600" : (!result.isResult && result.isTrue) ? "border-red-600" : ""}`} /> 

                    <button type="button" className="bg-green-500 text-white font-bold p-1.5 rounded-lg cursor-pointer hover:bg-green-600">Check</button>
                </div>
            </form>
        </div>
    )
}