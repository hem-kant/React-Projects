import React from "react"; 
import femaleProfile from '/Users/kanthem/Documents/ReactJS/resourceallocation/src/images/femaleProfile.jpeg';
import maleProfile from '/Users/kanthem/Documents/ReactJS/resourceallocation/src/images/maleProfile.jpeg';
const TeamMeberCard = ({employee, selectedTeam,handleEmployeeCardClick}) => {

    return ( 
        <div key={employee.id} id={employee.id} className={(employee.teamName === selectedTeam? 'card m-2 standout': 'card m-2')} style={{ cursor: "pointer"}} onClick={handleEmployeeCardClick}> 
                                    <img src={femaleProfile} className="card-img-top" alt=""></img>
                                    <div className="card-body">
                                        <h5 className="card-title"> Full Name: {employee.fullName}</h5>
                                        <p className="card-text"><b>Designation:</b> {employee.designation}</p>

                                    </div>
                                 </div>
    )
}
export default TeamMeberCard;
