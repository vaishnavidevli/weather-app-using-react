import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./infoBox.css";

export default function InfoBox({info}){
    const INIT_URL="https://media.istockphoto.com/id/1078257882/photo/blue-sky-and-white-clouds-over-the-city.webp?a=1&b=1&s=612x612&w=0&k=20&c=9aXs6h_b0aeyRMiO4OiVjMt7FSYszIhHs9AK4SCfDak=";
    const HOT_URL="https://media.istockphoto.com/id/1137759901/photo/summer-hot-weather-season-high-temperature-thermometer-with-city-view.webp?a=1&b=1&s=612x612&w=0&k=20&c=mTWF-uHN6hawvdK0rvqiWAYt5Y8E7u_i3N0XTlRRo_Q="
    const Cold_URL="https://plus.unsplash.com/premium_photo-1670604649107-a0171e5f1bd0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D"
    const RAIN_URL="https://images.unsplash.com/photo-1519692933481-e162a57d6721?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHJhaW4lMjBpbiUyMGNpdHl8ZW58MHx8MHx8fDA%3D"
    
    return (
        <div className="info">
            <br></br>
            <div className='cardContainer'>
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity>80? RAIN_URL : info.temp>15? HOT_URL:Cold_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
          <p>Temprature = {info.temp}&deg;C</p>
          <p>Humidity = {info.humidity}</p>
          <p>Max Temprature = {info.max}&deg;C</p>
          <p>MinTemprature = {info.min}&deg;C</p>
          <p>weather = {info.weather}</p>
          <p>feels_like = {info.feelslike}&deg;C</p>
        </Typography>
      </CardContent>
    </Card>
    </div>

        </div>
    );

}