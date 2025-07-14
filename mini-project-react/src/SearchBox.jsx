import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';


export default function SearchBox({updateInfo}){
    let[city,setCity]=useState("");
    let[error,setError]=useState(false);
    const API_URL="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY="5e6d8e94f2118030325cba0d1afd7e4a";

let getWeatherInfo=async()=>{
    try{
        let response=await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse=await response.json();
        console.log(jsonResponse);
        let result={
        city:city,
        temp:jsonResponse.main.temp,
        tempMin:jsonResponse.main.temp_min,
        tempMax:jsonResponse.main.temp_max,
        humidity:jsonResponse.main.humidity,
        feelslike:jsonResponse.main.feelsLike,
        weather:jsonResponse.weather[0].description,
    };
    return result;
    }catch(error){
        throw error;
    }
}

    let handleChange=(event)=>{
        setCity(event.target.value);
    }
    let handleSubmit=async(event)=>{
        try{
             event.preventDefault();
        setCity("");
        let newInfo=await getWeatherInfo();
        updateInfo(newInfo);
        }catch(error){
            setError(true);
        }
    };

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <TextField id="city" label="City Name" variant="outlined" value={city} onChange={handleChange}/>
                <br /><br />
                <Button variant="contained" type='submit'>
                    Search
                </Button>
                
                {error && <p style={{color:"red"}}>No such place in our API</p> }
            </form>
        </div>
    )
}