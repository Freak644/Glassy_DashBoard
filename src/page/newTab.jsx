import { useEffect } from "react";
import { database, useTabToggle } from "../lib/globalState"
import BackGround from "./background/backgroundMgmt";
import Controller from "./controller/mainController";
import Widgets from "./widgets/mainHandler";
import MainBookmark from "./controller/mainBookmark";
import AllAps from "./widgets/Homeaps/homeAll";
export default function NewTab() {
    const data = database(stat=>stat.db);
    const tabsObj = useTabToggle(stat => stat.tabObj);
    useEffect(()=>{
        console.log(tabsObj)
    },[tabsObj])
    return(
        <div className="underTaker">
            <BackGround/>
            <Controller />
            <Widgets />
            <MainBookmark/>
            <AllAps/>

            {tabsObj.allApps && <div className="thornPrincess inCommingAnim flex items-center justify-center bg-white/5 backdrop-blur-lg z-20">

                </div>}
        </div>
    )
}