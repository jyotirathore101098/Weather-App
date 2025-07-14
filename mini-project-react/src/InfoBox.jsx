import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import SunnyIcon from '@mui/icons-material/Sunny';

export default function InfoBox({info}){
    const Init_URL="https://images.unsplash.com/photo-1561915511-0184090c2bdb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  
    return(
        <div className="InfoBox">
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={Init_URL}
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {info.city}{info.humidity > 80 ?  <ThunderstormIcon />: info.temp > 15 ? <SunnyIcon/> : <AcUnitIcon/> }
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary'} } component={"span"}>
                    <div>
                        <p>Temprature={info.temp}</p>
                        <p>Humiity={info.humidity}</p>
                        <p>Min Temp={info.tempMin}&deg;C</p>
                        <p>Max Temp={info.tempMax}&deg;C</p>
                        <p>Weather is described as {info.weather} and feels like {info.feelslike}&deg;C</p>
                    </div>
                    </Typography>
                </CardContent>
               
            </Card>
        </div>
    )
}