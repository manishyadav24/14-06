// import logo from './logo.svg';
import './App.css';

function Display(info){
  return <h1> <li>{info.data}</li> </h1>;
}

function App() {
  return (
    <span style={{'text-align' : 'center'}}>
      <Display data="LPU is situated in Jalandhar, Punjab."/>
      <Display data="It is largest private university in India."/>
      <Display data="It has exceptional placement records."/>
    </span>
  );
}

export default App;
