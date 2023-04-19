import React from 'react';
import { useSelector } from 'react-redux';
import styles from '../../styles/MyProfile.module.css';

const MyProfile = () => {
  const rockets = useSelector((state) => state.rockets.rockets);
  const reservedRockets = rockets.filter((rocket) => rocket.reserved);
  const missions = useSelector((state) => state.mission001.missions);
  const joinedMission = missions.filter((mission) => mission.reserved);

  return (
    <div className={styles.mainContainer}>
      <div className={styles.missionContainer}>
        <h2>My Missions</h2>
        <ul className={styles.UL}>
          {joinedMission.length ? (
            joinedMission.map((mission) => (
              <li key={mission.id}>{mission.mission_name}</li>
            ))
          ) : (
            <>
              <li>
                It looks like you haven&apos;t Joined any Missions yet.
                Don&apos;t forget to check out the Missions page to make a reservation.
              </li>
            </>
          )}
        </ul>
      </div>
      <div className={styles.rocketContainer}>
        <h2>My Rockets</h2>
        <ul className={styles.UL}>
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
