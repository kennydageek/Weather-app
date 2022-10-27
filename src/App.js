import welcome from './images/Welcome.png';
function App() {
  return (
    <div className="App">
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

      <button className="cta">Get Started</button>
    </div>
  );
}

export default App;
