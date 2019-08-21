import React, {useState} from 'react';


const  MemberForm =  (props) =>{
    const [member, setMember] = useState({name:"", email:"", role:""});
    
    const changeHandler = event => {
        setMember({...member, [event.target.name]: event.target.value});
    };
    
    const submitForm = event => {
        event.preventDefault();
        const newMember = {
            ...member,
            id: Date.now()
        };
        props.addNewMember(newMember);
       setMember({name: '', email: '', role: ''});
    };
    return(
       
            <form onSubmit={submitForm}>
                <label htmlFor="name">Member Name:</label>   
                <input 
                type="text"  
                name="name"
                value={member.name}
                placeholder= "member name"
                 onChange={changeHandler} />
            
               
                <label htmlFor="email">Member Email:</label>
                <input 
                type="email" 
                name="email" 
                value={member.email}
                placeholder="member email"  
                onChange={changeHandler} />
                
                <label htmlFor="role">Member Role:</label>
                <input 
                type="text" 
                name="role"
                value={member.role}
                placeholder="member role"
                onChange={changeHandler} />
               
                <button type="submit"> Add Member</button>
            </form>
  
    );
}

export default MemberForm;