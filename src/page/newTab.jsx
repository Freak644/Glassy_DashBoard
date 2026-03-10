import { useEffect } from "react";
import { database } from "../lib/globalState"
import BackGround from "./background/backgroundMgmt";
import Controller from "./controller/mainController";
import Widgets from "./widgets/mainHandler";
export default function NewTab() {
    const data = database(stat=>stat.db);
    useEffect(()=>{
        console.log(data)
    },[data])
    return(
        <div className="underTaker">
            <BackGround/>
            <Controller />
            <Widgets />
        </div>
    )
}