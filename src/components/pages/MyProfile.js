import React from 'react';
import { useSelector } from 'react-redux';
import styles from '../../redux/features/rockets/MyProfile.module.css';

const MyProfile = () => {
  const rockets = useSelector((state) => state.rockets.rockets);
  const reservedRockets = rockets.filter((rocket) => rocket.reserved);

  return (
    <div className={styles.mainContainer}>
      <div className={styles.missionContainer}>
        <p>missions container</p>
      </div>
      <div className={styles.rocketContainer}>
        <h2>My Rockets</h2>
        <ul className={styles.rocketsUL}>
          {reservedRockets.length ? (
            reservedRockets.map((rocket) => (
              <li key={rocket.id}>{rocket.name}</li>
            ))
          ) : (
            <>
              <li>
                It looks like you haven&apos;t reserved any rockets yet.
                Don&apos;t forget to check out the Rockets page to make a reservation.
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};
export default MyProfile;
