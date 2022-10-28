import { MdOutlineLightMode, MdOutlineDarkMode } from 'react-icons/md';
import { IconContext } from 'react-icons';
import { useState } from 'react';
// import useFetch from '../useFetch';

const Weather = () => {
  const [mode, setMode] = useState(true);

  const handleToggle = () => {
    setMode(!mode);
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
    </IconContext.Provider>
  );
};

export default Weather;
