import './missions.css';
import { useDispatch, useSelector } from 'react-redux';
import { reserveMission, cancelMission } from '../../redux/missions/missionsSlice';

const Missions1 = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.mission001.missions);
  return (
    <div className="container">
      <div className="mission-container title_hieght">
        <h2 className="mission_name title_hieght">Missions</h2>
        <h2 className="mission_description title_hieght">description</h2>
        <h2 className="mission_name title_hieght">status</h2>
        <p className="mission_name title_hieght" />
      </div>
      {missions.map((mission) => (
        <div
          key={mission.mission_id}
          style={{
            backgroundColor: missions.indexOf(mission) % 2 === 0 ? '#edeff5' : '#fff',
          }}
          className="mission-container"
        >
          <h2 className="mission_name">{mission.mission_name}</h2>
          <p className="mission_description">{mission.description}</p>
          <div className="mission-btn">
            {mission.reserved ? <button type="button" className="member-display">Active member</button> : <button type="button" className="not-member">Not A MEMBER</button>}
          </div>
          <div className="mission-btn">
            {mission.reserved ? (
              <button
                type="button"
                className="member-toggled"
                onClick={() => { dispatch(cancelMission(mission.mission_id)); }}
              >
                LEAVE MISSION
              </button>
            ) : (
              <button
                type="button"
                className="member"
                onClick={() => { dispatch(reserveMission(mission.mission_id)); }}
              >
                JOIN MISSION
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

const Missions = () => (
  <div>
    <Missions1 />
  </div>
);

export default Missions;
