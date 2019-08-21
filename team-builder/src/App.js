import React, {useState} from 'react';
import MemberForm from './component/MemberForm';
import './App.css';
import Members from './component/Members';
import data from '../src/data';

function App() {
  const[members, setMembers]= useState(data);
  const addNewMember = member =>{
    setMembers([...members, member]);
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>My Members</h1>

      <MemberForm addNewMember={addNewMember} />
      <Members memberList={members} /> 
      </header>
    </div>
  );
}

export default App;
