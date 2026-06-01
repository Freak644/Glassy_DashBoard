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
                <div className="underTaker">
                    <button className="flex absolute top-2.5 right-2.5 items-center justify-center w-10 h-10 hover:bg-gray-500/25 hover:rotate-180 duration-300 transition-all cursor-pointer text-red-500! font-bold text-2xl rounded-full">
                        X
                    </button>

                    <div className="innerContainer-forApp h-4/5 w-250 bg-gray-700/10 rounded-lg shadow">

                    </div>
                </div>
            </div>}
        </div>
    )
}