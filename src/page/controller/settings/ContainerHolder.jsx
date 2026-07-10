import { database } from "../../../lib/globalState";
import ContainerStructure from "./mgmtBuilder";

export default function ContainerHolder () {
    const {name, background, searchWid, clockWid, weatherWid} = database(stat=> stat.db);
    console.log(name);
    return(
        <div className="h-full w-full my-scroll">
            <ContainerStructure/>
        </div>
    )
}