import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import "./OutputBox.css"
import AcUnitTwoToneIcon from '@mui/icons-material/AcUnitTwoTone';
import WbSunnyTwoToneIcon from '@mui/icons-material/WbSunnyTwoTone';
import ThunderstormTwoToneIcon from '@mui/icons-material/ThunderstormTwoTone';




function OuputBox({info}) {

    const HOT_URL = "https://media.istockphoto.com/id/936342386/photo/yellow-umbrella-with-bright-sun-and-blue-sky.jpg?s=1024x1024&w=is&k=20&c=x2eHrUfE_KsGE8Y6yzIG13fCw5tQ_7Ig-ewjt8uO8FQ=";
    const RAIN_URL = "https://media.istockphoto.com/id/105934727/photo/rain.jpg?s=1024x1024&w=is&k=20&c=NyB7w-uFLH5DvfzVARNmAx9lofieWs5m4f7_pEm_ly0=";
    const COLD_URL = "https://images.unsplash.com/photo-1603726574752-a85dc808deab?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";


  return (
    <div>
        <h2>Weather Info</h2>
    <div className='OutputBox'>
        <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={info.humidity > 80 ? RAIN_URL : info.temperature > 10 ? HOT_URL : COLD_URL}
          alt="weather-pic"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {info.city}
            {
              info.humidity > 80 ? <ThunderstormTwoToneIcon/> : info.temperature > 10 ? <WbSunnyTwoToneIcon/> : <AcUnitTwoToneIcon/>
            }
          </Typography>
          <Typography variant="body2" color="text.secondary" component={"span"}>
            <p>Tempareture = {info.temperature}&deg;C</p>
            <p>Humidity = {info.humidity}</p>
            <p>Wind Speed = {info.windSpeed}</p>
            <p>Weather is <i>{info.description}</i> and feels alike {info.feelsLike}&deg;C</p>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
    </div>
    </div>
  )
}

export default OuputBox