import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import "./SearchBox.css";
import { useState } from 'react';

function SearchBox({updateWeatherInfo}) {
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);

    const url = "https://api.openweathermap.org/data/2.5/weather";

    const API_KEY = "69e561ae80cab098b2f8b92915c99788";

    let getWeatherInfo = async () => {
        try{
            let response = await fetch(`${url}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse = await response.json();
            let result = {
                city : jsonResponse.name,
                temperature : jsonResponse.main.temp,
                humidity : jsonResponse.main.humidity,
                feelsLike : jsonResponse.main.feels_like,
                description : jsonResponse.weather[0].description,
                windSpeed : jsonResponse.wind.speed,
            }
            console.log(result)
            return result;
            
        }catch(err){
            throw err;
        }
    }


    let handleInputChange = (e) => {
        setCity(e.target.value);
    }

    let handleFormSubmit = async (e) => {
        try{
            e.preventDefault();
            console.log(city);
            setCity("");
            let newInfo = await getWeatherInfo();
            updateWeatherInfo(newInfo);
        }catch(err){
            setError(true);
        }
    }

    return (
        <div className='SearchBox'>
            <form onSubmit={handleFormSubmit}>
                <TextField 
                    id="city" 
                    label="Enter city"
                    variant="outlined"
                    value={city}
                    onChange={handleInputChange} 
                    required
                />

                <br></br>
                <br></br>
                <Button
                    type='submit'
                    variant="contained"
                    endIcon={<SendIcon />}>
                    Search
                </Button>
            </form>
            {error && <p style = {{color : "red"}}>No such city found*</p>}
        </div>
    )
}

export default SearchBox