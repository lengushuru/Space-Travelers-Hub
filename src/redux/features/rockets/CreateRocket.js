import { useDispatch, useSelector } from 'react-redux';
import styles from '../../../styles/CreateRocket.module.css';
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
    return <h1>Oops, something went wrong. Please try again later.</h1>;
  }

  return (
    <ul className={styles.rocketUL} data-testid="create-rocket">
      {rockets.rockets.map((rocket) => (
        <li key={rocket.id}>
          <img
            className={styles.rocketImg}
            src={rocket.flickr_images[0]}
            onError={handleImageError}
            alt={rocket.rocket_name}
          />
          <div className={styles.descripContainer}>
            <p className={styles.name}>{rocket.rocket_name}</p>
            <p className={styles.description}>
              {rocket.reserved && <span className={styles.reservedBadge}>Reserved</span>}
              {rocket.description}
            </p>
            <button
              onClick={() => {
                dispatch(toggleReservedState(rocket.id));
              }}
              type="submit"
              className={rocket.reserved ? styles.cancelBtn : styles.reservedBtn}
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
