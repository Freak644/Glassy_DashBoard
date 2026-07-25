import { database } from "../../../lib/globalState";
import ClockCotroll from "./clockControl";
import ContainerStructure from "./mgmtBuilder";
import WeatherColtroller from "./weatherControl";

export default function ContainerHolder () {
    const {name, background, searchWid, clockWid, weatherWid} = database(stat=> stat.db);
    let {setDB} = database();
    const containerRows = {
        
    }

    return(
        <>
            <div className="controllerContainer">
                <ContainerStructure crntData={{name,searchWid}}/>
            </div>
            <div className="controllerContainer">
                <ClockCotroll crntData={{clockWid}}/>
            </div>
            <div className="controllerContainer">
                <WeatherColtroller crntData={weatherWid} setData={setDB} />
            </div>
        </>
    )
}