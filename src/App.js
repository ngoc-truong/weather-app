import React, {useState, useEffect} from 'react';
import Form from "./components/Form";
import Weather from "./components/Weather";
import Error from "./components/Error";
import "./App.css";

const App = () => {
  const API_KEY = process.env.REACT_APP_WEATHER_API;
  const [newSearch, setNewSearch] = useState("");
  const [url, setUrl] = useState("");
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [minTemp, setMinTemp] = useState("");
  const [maxTemp, setMaxTemp] = useState("");
  const [description, setDescription] = useState("");
  const [weatherImage, setWeatherImage] = useState("");

  const weather = document.querySelector("#weather");
  const error = document.querySelector("#error");

  // Whenever the newSearch state changes, change the url as well
  useEffect( () => {
    setUrl(`https://api.openweathermap.org/data/2.5/weather?q=${newSearch}&units=metric&appid=${API_KEY}`)
  }, [newSearch])

  const onFormSubmit = (e) => {
    e.preventDefault();
    fetch(url, { mode: "cors" })
      .then( (response) => {
        return response.json();
      })
      .then ( (response) => {
        setCountry(response.sys.country);
        setName(response.name);
        setMinTemp(response.main.temp_min);
        setMaxTemp(response.main.temp_max);
        setDescription(response.weather[0].description);
        setWeatherImage(`http://openweathermap.org/img/wn/${response.weather[0].icon}@2x.png`);
        
        hide(error);
        show(weather);
      })
      .catch ( () => {
        show(error);
        hide(weather);
      })
  }

  const show = (element) => {
    element.classList.add("show");
    element.classList.remove("hide");
  }

  const hide = (element) => {
    element.classList.add("hide");
    element.classList.remove("show");
  }

  const handleChange = (event) => {
    setNewSearch(event.target.value);
  }

  return (
    <div className="app">
      <Form 
        onFormSubmit={onFormSubmit}
        handleChange={handleChange}
        newSearch={newSearch} />

      <Error />
      <Weather
        name={name}
        country={country}
        minTemp={minTemp}
        maxTemp={maxTemp}
        description={description}
        weatherImage={weatherImage} />
      
    </div>
  )
}

export default App;
