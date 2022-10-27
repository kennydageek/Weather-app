import welcome from '../images/Welcome.png';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <div className="welcome">
        <img src={welcome} alt="welcome" className="welcome__img" />
      </div>

      <div className="welcome-text">
        <h1 className="welcome-text__heading">
          Discover the Weather in Your City
        </h1>
        <p className="welcome-text__paragraph">
          Get to know your weather maps and <br /> radar precipitation forecast
        </p>
      </div>

      <Link to="/weather">
        <button className="cta">Get Started</button>
      </Link>
    </>
  );
};

export default Home;
