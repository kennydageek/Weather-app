import { MdOutlineLightMode, MdOutlineDarkMode } from 'react-icons/md';
import { IconContext } from 'react-icons';
import { useState } from 'react';
import Skycons, { SkyconsType } from 'react-skycons';
import useFetch from '../useFetch';
import WeatherDetails from '../components/WeatherDetails';

const Weather = () => {
  const [mode, setMode] = useState(true);
  const [cityName, setCityName] = useState('Lagos');
  const { data } = useFetch(cityName);
  // console.log(data);

  const handleToggle = () => {
    setMode(!mode);
  };

  const svgProps = {
    style: { color: 'blue' },
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCityName(cityName);
  };

  return (
    <IconContext.Provider value={{ size: '2.3rem' }}>
      <nav className="navigation flex">
        <div className="lightmode">
          <MdOutlineLightMode
            onClick={handleToggle}
            color={mode ? '#57c4ff' : '#504f53'}
          />
        </div>
        <div className="location">
          <p>
            {data.name}, {data.sys.country}
          </p>
        </div>
        <div className="darkmode">
          <MdOutlineDarkMode
            onClick={handleToggle}
            color={!mode ? '#57c4ff' : '#504f53'}
          />
        </div>
      </nav>

      <h2 className="heading">Today's Report</h2>

      <div className="weather-icon">
        {data.weather[0].main === 'Rain' ? (
          <Skycons
            color="white"
            type={SkyconsType.RAIN}
            animate={true}
            size={150}
            resizeClear={true}
            {...svgProps}
          />
        ) : data.weather[0].main === 'Clouds' ? (
          <Skycons
            color="white"
            type={SkyconsType.CLOUDY}
            animate={true}
            size={150}
            resizeClear={true}
            {...svgProps}
          />
        ) : data.weather[0].main === 'Snow' ? (
          <Skycons
            color="white"
            type={SkyconsType.SNOW}
            animate={true}
            size={150}
            resizeClear={true}
            {...svgProps}
          />
        ) : data.weather[0].main === 'Wind' ? (
          <Skycons
            color="white"
            type={SkyconsType.WIND}
            animate={true}
            size={150}
            resizeClear={true}
            {...svgProps}
          />
        ) : (
          <Skycons
            color="white"
            type={SkyconsType.CLEAR_DAY}
            animate={true}
            size={150}
            resizeClear={true}
            {...svgProps}
          />
        )}
      </div>

      <div className="weather-details">
        <p className="weather__description">{data.weather[0].description}</p>
        <div className="weather-temp">
          <p className="weather-temp__number">
            {Math.floor(data.main.temp - 273)}
          </p>
          <p className="weather-temp__degree">O</p>
        </div>
      </div>

      <div className="info-add">
        <WeatherDetails weather={data} />
      </div>

      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="form__input"
          placeholder="Please enter a city name"
          value={cityName}
          onChange={(e) => setCityName(e.target.value)}
        />
      </form>
    </IconContext.Provider>
  );
};

export default Weather;
