import React, { useState } from 'react'; 
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./searchbox.css";

export default function SearchBox({updateinfo}) { 
    const [city, setCity] = useState("");

    const API_URL="https://api.openweathermap.org/data/2.5/weather";
    const API_key="";

    let getweatherinfo= async ()=>{
        let response=await fetch(`${API_URL}?q=${city}&appid=${API_key}&units=metric`);
        let jsonResponse=await response.json();
        console.log(jsonResponse);

        let result={
            city:city,
            temp: jsonResponse.main.temp,
            min: jsonResponse.main.temp_min,
            max: jsonResponse.main.temp_max,
            humidity: jsonResponse.main.humidity,
            feelslike: jsonResponse.main.feels_like,
            weather: jsonResponse.weather[0].description,
        };
        console.log(result);
        return result;
    }

    const handleChange = (evt) => {
        setCity(evt.target.value);
    };

    const handleSubmit = async(evt) => {
        evt.preventDefault();
        console.log(city); 
        setCity("");
        let newinfo=await getweatherinfo();
        updateinfo(newinfo);
    };

    return (
        <div className="search">
            <form onSubmit={handleSubmit}> 
                <TextField
                    id="city"
                    label="City Name"
                    variant="outlined"
                    required
                    value={city}
                    onChange={handleChange}
                />
                <br />
                <br />
                <Button variant="contained" type="submit" >
                    Search
                </Button>
            </form>
        </div>
    );
}
