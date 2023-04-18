import { useDispatch, useSelector } from 'react-redux';
import styles from './Rockets.module.css';
import { toggleReservedState } from './rocketSlice';

const Rocket = () => {
  const rockets = useSelector((state) => state.rockets);
  const dispatch = useDispatch();

  if (rockets.isLoading) {
    return <h1>Loading...</h1>;
  }

  if (rockets.error) {
    return <h1>{rockets.error}</h1>;
  }

  return (
    <ul className={styles.rocketUL}>
      {rockets.rockets.map((rocket) => (
        <li key={rocket.id}>
          <img src={rocket.flickr_images[0]} alt={rocket.rocket_name} />
          <div>
            <p>{rocket.rocket_name}</p>
            <p>
              {rocket.reserved && <span className="reserved-badge">reserved</span>}
              {rocket.description}
            </p>
            <button
              onClick={() => {
                dispatch(toggleReservedState(rocket.id));
              }}
              type="submit"
            >
              {rocket.reserved ? 'Cancel Reservation' : 'Reserve Rocket'}

            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Rocket;
