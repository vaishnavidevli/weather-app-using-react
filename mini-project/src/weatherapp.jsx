import SearchBox from "./searchbox";
import InfoBox from "./infoBox";
import { useState } from "react";

export default function Weatherapp(){
    const [weatherinfo,setweatherInfo]=useState({
        city:"dehradun",
        feelslike:24.84,
        temp:25.05,
        min:25.05,
        max:25.05,
        humidity:47,
        weather:"Haze",
    });

    let updateinfo=(newinfo)=>{
        setweatherInfo(newinfo);
    }
    return (

        <div style={{textAlign:"center"}}>
            <h2>weather app by me</h2>
            <SearchBox updateinfo={updateinfo}/>
            <InfoBox info={weatherinfo}/>
        </div>
    );
}