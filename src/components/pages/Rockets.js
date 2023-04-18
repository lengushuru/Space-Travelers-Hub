import React from 'react';
import { useSelector } from 'react-redux';

const Rocket = () => {
  const rockets = useSelector((state) => state.rockets);

  return (
    <div>
      {rockets.rockets.map((rocket) => (
        <div key={rocket.id}>
          <img src={rocket.flickr_images} alt="" />
        </div>
      ))}
    </div>
  );
};

const Rockets = () => (
  <div>
    <Rocket />
  </div>
);
export default Rockets;
