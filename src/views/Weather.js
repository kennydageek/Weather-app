import { useState, useEffect } from 'react';
import useFetch from '../useFetch';

const Weather = () => {
  useFetch('peru');
  return (
    <div>
      <h2>hello</h2>
    </div>
  );
};

export default Weather;
