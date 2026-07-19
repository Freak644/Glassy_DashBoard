import { database } from "../../../lib/globalState";
import ClockCotroll from "./clockControl";
import ContainerStructure from "./mgmtBuilder";

export default function ContainerHolder () {
    const {name, background, searchWid, clockWid, weatherWid} = database(stat=> stat.db);
    
    const containerRows = {
        
    }

    return(
        <>
            <div className="controllerContainer">
                <ContainerStructure crntData={{name,searchWid}}/>
            </div>
            <div className="controllerContainer">
                <ClockCotroll/>
            </div>
        </>
    )
}