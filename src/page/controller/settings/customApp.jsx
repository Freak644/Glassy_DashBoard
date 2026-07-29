import { data, input, pre } from "framer-motion/client";
import { useEffect, useState } from "react"
import { toast } from "react-toastify";

export default function FranApp ({crntList, setData}) {
    let {quickAcSetting, quickAcces} = crntList;
    const [builDerLocalData, setIntoLocalData] = useState(quickAcces);

    const getWebsiteName = (url) => {
        const hostname = new URL(url).hostname.replace(/^www\./, "")
        .split(".")[0];

        return hostname.charAt(0).toUpperCase() + hostname.slice(1)
        
    };

    const getIcon = (url) => `chrome://favicon2/?size=128&pageUrl=${encodeURIComponent(url)}`;

    const saveUrl =  (inp) => {
       
        let {name, value} = inp;
        if (value.trim().length < 4) {
            return toast.warning("Invalid URL")
        }

        let tempURL = value.trim();

        if (!/^https?:\/\//i.test(tempURL)) {
            tempURL = `https://${tempURL}`;
        }

        let isValidUrl;

        try {
            new URL(tempURL);
            isValidUrl = true;
        } catch {
            isValidUrl = false;
        }

        if (!isValidUrl) {
            return toast.error("Please check your URL");
        }

        let normalizedURL = new URL(tempURL).origin.toLocaleLowerCase();
        
        let exists = builDerLocalData.some(
            app => new URL(app.url).origin.toLocaleLowerCase() === normalizedURL
        )
        if (exists) {
            return toast.info("Url Already Marked");
        }
        let tempObj = {
            url: normalizedURL,
            name: getWebsiteName(normalizedURL)
        }

        setIntoLocalData(prev => {
            const copy = [...prev];
            copy[name] = tempObj;
            return copy;
        });

        
    }   

    useEffect(()=> {

        let tempObj = {
            quickAcces:builDerLocalData
        }

        setData({data: tempObj, isGet:false})
    },[builDerLocalData]);

    return(
        <>
            <p className="headingP">🤖 Home App's</p>
            <div className="controlleBox">
                <div className="leftaSideC">
                    <div className="iconCon">🤖</div>
                    <div className="textHolder">
                        <p>Featch From History</p>
                        <span>Show frequently acceded site</span>
                    </div>
                </div>

                <div className={`rightaSideC ${quickAcSetting.isFrequently ? "Active" : ""}`}>
                    <button onClick={()=>{
                        let tempObj = {
                            quickAcSetting:{
                                isFrequently:!quickAcSetting.isFrequently
                            }
                        }
                        setData({data: tempObj , isGet: false})
                    }}>
                        <p></p>
                    </button>
                </div>
            </div>
            {
               !quickAcSetting.isFrequently && builDerLocalData.map((obj,index)=>(
                    <div key={index} className="controlleBoxA flex items-center flex-row gap-2">
                        <div className="imgHolder h-full flex-1 flex items-center justify-center">
                            <img src={getIcon(obj.url)} className="h-10! w-10!" alt="" />
                        </div>
                        <div className="inputHolder flex-5 flex items-center flex-row gap-2">
                            <input type="text" name={index.toString()} placeholder={obj.url} className="border-2 border-gray-400/10 h-10 rounded-lg p-2.5 w-4/5 placeholder:text-gray-500" />
                            <button onClick={(evnt)=>{
                                let input = evnt.target.previousElementSibling;
                              
                                saveUrl(input);
                            }} className="p-2.5 rounded-md border border-amber-50/40 bg-blue-700 hover:bg-blue-800 cursor-pointer"><i className="bx bx-save pointer-events-none"></i></button>
                        </div>
                    </div>
                ))
            }
        </>
    )
}