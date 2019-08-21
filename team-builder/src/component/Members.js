import React from 'react';


const Members = props => {
    console.log(props);
    return(
        <div className="member-list">
            {props.memberList.map(member => {
                return(
        
        <div className="member" key={member.id}>
            <h2>{member.name}</h2>
            <p>{member.email}</p>
            <p>{member.role}</p>
        </div>
            );
        })}
        </div>
    );
};
export default Members;