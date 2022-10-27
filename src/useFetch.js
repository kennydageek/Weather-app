import { useState, useEffect } from 'react';

const useFetch = (cityName) => {
  const [lat, setLat] = useState(null);
  const [lon, setLon] = useState(null);
  useEffect(() => {
    fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=d4ef7b1dc95570d1499b63ba42d48dc1`
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setLat(data[0].lat);
        setLon(data[0].lon);
      });
  });

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=d4ef7b1dc95570d1499b63ba42d48dc1`
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
      });
  });
};

export default useFetch;