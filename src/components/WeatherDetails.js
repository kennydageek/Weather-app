import Skycons, { SkyconsType } from 'react-skycons';

const WeatherDetails = ({ weather }) => {
  const svgProps = {
    style: { color: 'blue' },
  };
  const infos = [
    {
      icon: SkyconsType.CLOUDY,
      unit: 'km/h',
      value: weather.wind.speed,
      footer: 'Wind',
    },

    {
      icon: SkyconsType.SLEET,
      unit: 'g/m3',
      value: weather.main.humidity,
      footer: 'Humidity',
    },

    {
      icon: SkyconsType.CLEAR_DAY,
      unit: 'Pa',
      value: weather.main.pressure,
      footer: 'Pressure',
    },
  ];

  return (
    <>
      {infos.map((info) => (
        <div className="wind-container" key={info.footer}>
          <Skycons
            color="#eda329"
            type={info.icon}
            animate={false}
            size={32}
            resizeClear={true}
            {...svgProps}
          />
          <p className="wind-speed">
            {info.value}
            {info.unit}
          </p>
          <p className="wind-footer">{info.footer}</p>
        </div>
      ))}
    </>
  );
};

export default WeatherDetails;
