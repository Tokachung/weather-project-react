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
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=cb3a8590a21f7cf52d5e9d727d871959`;
    const response = await axios.get(url);
    setData(response.data);
  }

  return (
    <Box
      sx={{
        display: "table",
        height: "100px",
        width: "100%",
        textAlign: "center",
      }}
    >
      <Box
        sx={{
          display: "table-cell",
          verticalAlign: "middle",
        }}
      >
        <h1>My Weather App</h1>
        <Input
          placeholder="Input City Name:"
          value={location}
          onChange={(event) => {
            setLocation(event.target.value);
          }}
        />
        <Button variant="contained" onClick={getWeatherUpdate}>
          Click Me
        </Button>
        <Box>{data ? "Country: " + data.sys.country : ""}</Box>
        <Box>{data ? "Temperature: " + data.main.temp + " Celcius" : ""}</Box>
      </Box>
    </Box>
  );
}

export default App;
