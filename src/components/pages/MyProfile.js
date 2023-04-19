import React from 'react';
import { useSelector } from 'react-redux';
import styles from '../../redux/features/rockets/MyProfile.module.css';

const MyProfile = () => {
  const rockets = useSelector((state) => state.rockets.rockets);
  const missions = useSelector((state) => state.mission001.missions);
  const reservedRockets = rockets.filter((rocket) => rocket.reserved);
  const reservedMissions = missions.filter((mission) => mission.reserved);

  return (
    <div className={styles.mainContainer}>
      <div className={styles.rocketContainer}>
        <h2>My Missions</h2>
        <ul className={styles.rocketsUL}>
          {reservedMissions.length ? (
            reservedMissions.map((rocket) => (
              <li key={rocket.mission_id}>{rocket.mission_name}</li>
            ))
          ) : (
            <>
              <li>
                It looks like you haven&apos;t joined any mission yet.
                please navigate to Missions section and select missions to join
              </li>
            </>
          )}
        </ul>
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
