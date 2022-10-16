import React from "react";  

const TeamMembers = ({employees, selectedTeam,handleEmployeeCardClick}) => {

    return (
            employees.map((employee) =>(
                        <TeamMembers employee={employee} handleEmployeeCardClick={handleEmployeeCardClick} selectedTeam={selectedTeam}>

                        </TeamMembers>
                     ))
    )
}
export default TeamMembers;
