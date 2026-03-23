import { database } from "../../../../../lib/globalState"

export default function AskCity({crntData}) {
    let {setDB} = database();

    const handleName = (evnt) => {
        evnt.preventDefault();
        const formData = new FormData(evnt.target);
        const {key} = Object.fromEntries(formData);
        let conctructure = {...crntData, city:key}
        let data = {weatherWid:conctructure}
        setDB({data, isGet:false})
    }

    return(
        <div className="underTaker flex-col gap-6">
            <p className="font-bold text-2xl">Enter Your City</p>
            <form action="" onSubmit={handleName} className="p-1 flex items-center flex-col" >
                <div className="flex items-center flex-row p-1 w-full gap-5 relative">
                   
                    <input name="key" type="text" placeholder="City" className={`p-1 w-50 pl-2.5 border rounded-lg 
                      `} /> 

                    <button type="submit" className="bg-green-500 text-white font-bold p-1.5 rounded-lg cursor-pointer hover:bg-green-600">Save</button>
                </div>
            </form>
        </div>
    )
}