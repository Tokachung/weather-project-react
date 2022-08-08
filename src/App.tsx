import React, { useState } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";

function App() {
  const [location, setLocation] = useState("");
  const [data, setData] = useState<any>(null);
  const [value, setValue] = useState();

  async function getWeatherUpdate() {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=cb3a8590a21f7cf52d5e9d727d871959&units=metric`;
    const response = await axios.get(url);
    setData(response.data);
  }

  return (
    <div className="app">
      <div className="search">
        <input
          type="text"
          placeholder="Input City Name:"
          value={location}
          onChange={(event) => {
            setLocation(event.target.value);
          }}
        />
        <Button variant="contained" onClick={getWeatherUpdate}>
          Click Me
        </Button>
      </div>

      <div className="container">
        <div className="top"></div>

        <div className="location">
          <p>
            <Box> Country: {data ? data.sys.country : ""}</Box>
          </p>
          <div className="temp">
            <h1>
              <Box>{data ? +data.main.temp + " °C" : ""}</Box>
            </h1>
          </div>

          <div className="description">
            <p>Clouds</p>
          </div>
        </div>

        <div className="bottom">
          <div className="feels">
            <p>
              <Box className="bold">
                {data ? data.main.feels_like + "°C" : ""}
              </Box>
            </p>
            <p>Feels Like</p>
          </div>
          <div className="humidity">
            <p className="bold">
              <Box className="bold">{data ? data.main.humidity + "%" : ""}</Box>
            </p>
            <p>Humidity</p>
          </div>
          <div className="wind">
            <p className="bold">
              {" "}
              <Box>{data ? data.wind.speed + "km/hr" : ""}</Box>
            </p>
            <p>Wind Speed</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
