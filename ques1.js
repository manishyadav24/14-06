// import logo from './logo.svg';
//import React, {useState} from 'react';
import './App.css';

const Welcome = () => {
  return <div style={{'text-align' : 'center'}}>
    <h1>Welcome To Sample Website!</h1>
  </div>;
}

const Login = () => {
  return <div style={{'text-align' : 'center'}}>
    <h1>Login</h1>
    <div>
      <label for="name">Name : </label>
      <input type={'text'}/> <br/><br/>
      <label for="pwd">Password : </label>
      <input type={'password'}/>
    </div>
  </div>;
}

const Render = (status) =>{
  const isLoggedIn = status.isLoggedIn;
  return isLoggedIn ? Welcome() : Login();
}

function App() {
  return(
  <div>
   <Render isLoggedIn={false}/>
   </div>
  );
}

export default App;
