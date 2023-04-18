import { useSelector } from 'react-redux';

const Missions1 = () => {
  const missions = useSelector((state) => state.mission001.missions);
  return (
    <div>
      {missions.map((mission) => (
        <div key={mission.mission_id}>
          <h1>{mission.mission_name}</h1>
          <p>{mission.description}</p>
          <hr />
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
