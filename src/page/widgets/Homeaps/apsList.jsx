import { Apps } from "../../../lib/globalState";

export default function AppList () {
    const AllApps = Apps(stat=> stat.array) || [];


    const handleClick = url => {
        window.location.href=url;
    }

    const getIcon = (url) =>
  `https://www.google.com/s2/favicons?sz=128&domain_url=${url}`;

    return(
        <div className="h-full w-full my-scroll grid gap-2 grid-cols-8 p-2.5 auto-rows-min auto-cols-min items-center justify-center">
            {
                AllApps.map(app=>(
                <div className="flex items-center flex-col gap-1.5 h-17 w-14 m-2">
                    <div onClick={()=>handleClick(app.url)} title={app?.name} className="allApps cursor-pointer flex hover:scale-105 items-center justify-center h-13 w-13 rounded-lg border border-white/25 bg-blue-500/30">
                        <img src={getIcon(app.url)} className="h-4/5! w-4/5!" alt="" />
                    </div>
                    <span className="text-[8px]">{app.name}</span>
                </div>
                ))
            }
        </div>
    )
}