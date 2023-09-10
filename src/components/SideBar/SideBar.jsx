import React, { useState, useEffect } from "react";
import "./SideBar.css";
import axios from "axios";
import SideBarMore from "../SideBarMore/SideBarMore";

const SideBar = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState();
  const [error, setError] = useState("");
  const [isOn, setIsOn] = useState(false);

  useEffect(() => {
    // текущая локация
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          const API_KEY = "3f7cb2b653147123ddfc3ce8927d43d4";
          const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`;
  
          axios.get(url)
            .then((response) => {
              setWeatherData(response.data);
              setError("");
            })
            .catch((error) => {
              console.error("Error:", error);
              setError(
                "Упс :( Не удалось получить данные о погоде по текущей геолокации"
              );
            });
        },
        (error) => {
          console.error("Error:", error);
          setError("Упс :( Не удалось определить текущую геолокацию");
        }
      );
    }
  }, []);
  
  // Получение данных
  const getWeatherCity = async (e) => {
    e.preventDefault();
    const API_KEY = "3f7cb2b653147123ddfc3ce8927d43d4";

    if (city) {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
      await axios
        .get(url)
        .then((res) => {
          setWeatherData(res.data);
          setError(" ");
        })
        .catch((err) => {
          console.error("Error:", err);
          setError("Упс :( Введите город корректно");
          setCity("");
        });
    } else {
      setError("Введите название города");
    }
  };
  //Фиксируем город, очищение после error
  const handleInputChange = (e) => {
    setCity(e.target.value);
    setError("");
  };

  const getWeatherIcon = (iconCode) => {
    switch (iconCode) {
      case "01d":
        return <i className="fal fa-sun" style={{ color: "yellow" }}></i>;
      case "01n":
        return <i className="fas fa-moon" style={{ color: "blue" }}></i>;
      case "02d":
        return <i className="fad fa-sun-cloud" style={{ color: "yellow" }}></i>;
      case "02n":
        return <i className="fad fa-moon-cloud" style={{ color: "blue" }}></i>;
      case "04d":
        return <i className="fad fa-clouds" style={{ color: "blue" }}></i>;
      default:
        return (
          <i className="fad fa-temperature-high" style={{ color: "blue" }}></i>
        );
    }
  };

  const toggleSwitch = () => {
    setIsOn(!isOn);
  };

  return (
    <>
      <div className="col-md-4 container sideLeft">
        <div>
          <button onClick={toggleSwitch}>
            {isOn ? "Выключить" : "Включить"}
          </button>
          {isOn && <p> Включено</p>}
          {!isOn && <p>Выключено</p>}
        </div>
        <h1 className="mt-5 txt-title">Weather-App</h1>
        <form
          className="d-flex justify-content-center align-items-center inpWrapper"
          onSubmit={getWeatherCity}
        >
          <input
            className="searchCity w-50"
            type="text"
            placeholder="Введите название города"
            value={city}
            onChange={handleInputChange}
          />
          <button className="fal fa-search" type="submit"></button>
        </form>
        {error && <p className="error-message mt-2">{error}</p>}
        <div className="iconBlock mt-5">
          {weatherData && getWeatherIcon(weatherData.weather[0].icon)}
        </div>
        <div className="grade d-flex justify-content-center">
          {weatherData && <p>{Math.ceil(weatherData.main.temp - 273.15)}</p>}
          <span className="mt-2">
            <i className="fal fa-circle"></i>
          </span>
          <p className="grade-unit">C</p>
        </div>
        <div className="mt-5">
          {weatherData && <h2>{weatherData.weather[0].description}</h2>}
        </div>
        <div className="d-flex w-50 m-auto justify-content-between weathet-title">
          <p>Сегодня</p>
          <p>
            {weatherData && (
              <span>
                {new Date(weatherData.dt * 1000).toLocaleDateString("ru-RU", {
                  weekday: "short",
                  day: "numeric",
                  month: "short",
                })}
              </span>
            )}
          </p>
        </div>
        <div className="sidebar-bottom text-center mt-5">
          <p>
            <span>
              <i className="fal fa-map-marker-alt"></i>
            </span>
            {weatherData && <span>{weatherData.name}</span>}
          </p>
        </div>
      </div>
    </>
  );
};

export default SideBar;
