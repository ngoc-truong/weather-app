import React from "react";

const Weather = ( {name, country, minTemp, maxTemp, description, weatherImage} ) => {
    return (
        <div id="weather" className="hide">
            <h1>City: {name}</h1>
            <h2>Country: {country}</h2>
            <p>Min. temperature: {minTemp}°C</p>
            <p>Max. temperature: {maxTemp}°C</p>
            <p>Description: {description}</p>
            <img src={weatherImage} alt="Current weather"/>
        </div>
    )
}

export default Weather;