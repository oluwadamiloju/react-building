import {useEffect, useState} from 'react';
import './App.css';
import axios from 'axios';
import House from './Components/Building';

function App() {
  const[balance, setBalance] = useState(bal)
  let loading = true;

 let bal = 1000000

const validateBalance = () => {
  if(bal >= 1000000){
    
    loading = false
  }

}

let Building = <House balance = {balance} toBuild = {validateBalance}/>


  validateBalance()
  return (
    <div className="App">
      {loading && <h1>Loading...</h1>}
      {!loading && Building}
    </div>
  );
}

export default App;
