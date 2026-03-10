import { useState } from "react";
import NewTab from "../page/newTab";
import { database } from "../lib/globalState";

export default function MyApp() {
    let {setDB} = database();
    useState(()=>{
        if (typeof chrome !== "undefined" && chrome.storage?.local) {
            chrome.storage.local.get(null, (data) => {
                if (data?.db && Object.keys(data?.db).length > 0) {
                    setDB({data:data?.db,isGet:true});
                }
            });
        } else {
           let data = JSON.parse(localStorage.getItem("Saved"));
           if (data && Object.keys(data).length > 0) {
               setDB({data,isGet:true});
            }
        }
    },[])
    return(
        <NewTab/>
    )
}