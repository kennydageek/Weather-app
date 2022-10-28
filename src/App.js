import Home from './views/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Weather from './views/Weather';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/weather" element={<Weather />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
