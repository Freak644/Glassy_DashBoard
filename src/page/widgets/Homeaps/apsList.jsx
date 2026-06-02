import { Apps } from "../../../lib/globalState";

export default function AppList () {
    const AllApps = Apps(stat=> stat.array) || [];


    const handleClick = url => {
        window.location.href=url;
    }

    return(
        <div className="h-full w-full my-scroll grid gap-2 grid-cols-8 p-2.5 auto-rows-min auto-cols-min items-center justify-center">
            {
                AllApps.map(app=>(
                    <div onClick={()=>handleClick(app.url)} title={app?.name} className="allApps cursor-pointer flex hover:scale-105 items-center justify-center h-13 w-13 rounded-lg border border-white/25 bg-blue-500/30 m-2">
                        <img src={app.icon} className="h-4/5! w-4/5!" alt="" />
                    </div>
                ))
            }
        </div>
    )
}