import { database, useTabToggle } from "../../../lib/globalState"

export default function AllAps() {
    const quickAc = database(stat=> stat.db.quickAcces || []);
    let {toggleTabs} = useTabToggle();

    const handleClick = url => {
        window.location.href=url;
    }


     return (
        <div className="h-18 w-70 rounded-lg allApps overflow-hidden blurBg absolute bottom-7 z-20 myShadow">
            <div className="underTaker justify-start!">
                <div onClick={()=>toggleTabs("allApps")} title="All Apps" className="miniIconDiv p-2 cursor-pointer border border-white/25 bg-gray-500/50 ml-3.5 rounded-md">
                    <i className="bx bxs-dashboard text-3xl transition-all duration-300"></i>
                </div>
                <span className="m-2 text-gray-500/50! text-2xl">|</span>
                <div className="quickAccessH h-full w-48 flex items-center justify-center gap-2.5">
                    {
                        quickAc.map(app=>(
                            <div onClick={()=>handleClick(app.url)} title={app?.name} className="allApps cursor-pointer flex hover:scale-105 items-center justify-center h-13 w-13 rounded-lg border border-white/25 bg-blue-500/30">
                                <img src={app.icon} className="h-4/5! w-4/5!" alt="" />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
     )
}