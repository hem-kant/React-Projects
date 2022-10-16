import React from "react"; 
import { useState } from "react"; 

const GroupedTeamMembers = ({employess, selectedTeam, setTeam}) => {

    const [groupedEmployees, setGroupedData] =useState(groupedTeamEmployees());

    function groupedTeamEmployees(){
        var teams = [];

        var teamAMembers = employess.filter((employess) => employess.teamName === 'TeamA');
        var teamA = { team: 'TeamA', members: teamAMembers, collapsed: selectedTeam === 'TeamA' ? false : true };
        teams.push(teamA);
    
        var teamBMembers = employess.filter((employess) => employess.teamName === 'TeamB');
        var teamB = { team: 'TeamB', members: teamBMembers, collapsed: selectedTeam === 'TeamB' ? false : true };
        teams.push(teamB);
    
        var teamCMembers = employess.filter((employess) => employess.teamName === 'TeamC');
        var teamC = { team: 'TeamC', members: teamCMembers, collapsed: selectedTeam === 'TeamC' ? false : true };
        teams.push(teamC);
    
        var teamDMembers = employess.filter((employess) => employess.teamName === 'TeamD');
        var teamD = { team: 'TeamD', members: teamDMembers, collapsed: selectedTeam === 'TeamD' ? false : true };
        teams.push(teamD);
    
        return teams;
    }
    function handleTeamClick(event) {
        var transformedGroupData = groupedEmployees.map((groupedData) => groupedData.team === event.currentTarget.id ? { ...groupedData, collapsed: !groupedData.collapsed } : groupedData);
        setGroupedData(transformedGroupData);
        setTeam(event.currentTarget.id);
    
      }
    return (

        <main className="container">
        {groupedEmployees.map((item) => {
          return (
            <div key={item.team} className="card mt-2" style={{ cursor: "pointer" }}>
              <h4 id={item.team} className="card-header text-secondary bg-white" onClick={handleTeamClick}>
                Team Name: {item.team}
              </h4>
              <div id={"collapse_" + item.team} className={item.collapsed === true ? "collapse" : ""}>
                <hr />
                {item.members.map((member) => {
                  return (
                    <div key={member.id} className="mt-2">
                      <h5 className="card-title mt-2">
                        <span className="text-dark"><b>Full Name:</b> {member.fullName}</span>
                      </h5>
                      <p className="card-text text-dark mt-2">
                        <b>Designation:</b> {member.designation}
                      </p>
                    </div>
                  );
                })}
              </div>
              <hr />
            </div>
          );
        })}
      </main>
    )
}
export default GroupedTeamMembers;

