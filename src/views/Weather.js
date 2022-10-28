import { MdOutlineLightMode, MdOutlineDarkMode } from 'react-icons/md';
import { IconContext } from 'react-icons';
import { useState } from 'react';
import Skycons, { SkyconsType } from 'react-skycons';
import useFetch from '../useFetch';

const Weather = () => {
  const [mode, setMode] = useState(true);

  useFetch('Lagos');

  const handleToggle = () => {
    setMode(!mode);
  };

  const svgProps = {
    style: { color: 'blue' },
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
          <p>Lagos, Nigeria</p>
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
        <Skycons
          color="white"
          type={SkyconsType.SNOW}
          animate={true}
          size={150}
          resizeClear={true}
          {...svgProps}
        />
      </div>

      <div className="weather-details">
        <p className="weather__description">It's Snowy</p>
        <div className="weather-temp">
          <p className="weather-temp__number">29</p>
          <p className="weather-temp__degree">O</p>
        </div>
      </div>

      <div className="info-add">
        <div className="wind-container">
          <Skycons
            color="#eda329"
            type={SkyconsType.WIND}
            animate={false}
            size={32}
            resizeClear={true}
            {...svgProps}
          />
          <p className="wind-speed">23 km/h</p>
          <p className="wind-footer">Wind</p>
        </div>

        <div className="wind-container">
          <Skycons
            color="#eda329"
            type={SkyconsType.SLEET}
            animate={false}
            size={32}
            resizeClear={true}
            {...svgProps}
          />
          <p className="wind-speed">23 m/s</p>
          <p className="wind-footer">Humidity</p>
        </div>

        <div className="wind-container">
          <Skycons
            color="#eda329"
            type={SkyconsType.CLEAR_DAY}
            animate={false}
            size={32}
            resizeClear={true}
            {...svgProps}
          />
          <p className="wind-speed">23 Pa</p>
          <p className="wind-footer">Pressure</p>
        </div>
      </div>
    </IconContext.Provider>
  );
};

export default Weather;
