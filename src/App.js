import {useState} from 'react';
import './App.css';
import axios from 'axios';
import House from './Components/Building';
import Bungalow from './Components/Bungalow';

function App() {
  axios.get('http://localhost:5000/pillar')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })


  let loading = true;

 let bal = 2_000_000
  const[balance, setBalance] = useState(bal)

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
