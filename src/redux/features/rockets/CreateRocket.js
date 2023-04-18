import { useDispatch, useSelector } from 'react-redux';
import styles from './Rockets.module.css';
import { toggleReservedState } from './rocketSlice';
import falcon1 from '../../../assets/falcon1.jpg';

const Rocket = () => {
  const rockets = useSelector((state) => state.rockets);
  const dispatch = useDispatch();
  const handleImageError = (event) => {
    event.target.src = falcon1;
  };

  if (rockets.isLoading) {
    return <h1> Please wait, Rockets are Loading...</h1>;
  }

  if (rockets.error) {
    return <h1>{rockets.error}</h1>;
  }

  return (
    <ul className={styles.rocketUL}>
      {rockets.rockets.map((rocket) => (
        <li key={rocket.id}>
          <img src={rocket.flickr_images[0]} onError={handleImageError} alt={rocket.rocket_name} />
          <div>
            <p className={styles.name}>{rocket.rocket_name}</p>
            <p>
              {rocket.reserved && <span className={styles.reservedBadge}>reserved</span>}
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
