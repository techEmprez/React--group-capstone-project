/* eslint-disable no-console */
/* eslint-disable max-len */
import React from 'react';
import { useSelector } from 'react-redux';

const MyProfile = () => {
  const joinedMission = useSelector((state) => state.allMissions.missionsList);
  console.log(joinedMission);

  const filterJoinedMissions = joinedMission.filter((joinedMissionList) => joinedMissionList.isMissionJoined);
  console.log(filterJoinedMissions);

  return (
    <div className="my-profile">
      { filterJoinedMissions.length === 0 ? <h4>You Have No Missions Added</h4> : <h4>Missions Joined</h4> }
      <table>
        <tbody>
          { filterJoinedMissions.map((mission) => (
            <tr key={mission.mission_id}>{mission.mission_name}</tr>
          ))}
        </tbody>
      </table>
    </div>

  );
};

export default MyProfile;
