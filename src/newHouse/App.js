import React, {useEffect, useState} from 'react';
import './App.css';
import axios from 'axios';
import House from './Components/House'
import Loader from './Components/Loader'
import Balance from './Components/Balance'

function App() {
  const[balance, setBalance] = useState(1000000)
  const[loading, setLoading] = useState(true)
  const[pillar, setPillar] = useState(0)

  useEffect(() => {
    axios.get('http://localhost:5000/pillar')
      .then((response) => {
        let pillarPrice = response.data.price
        let pillarAmount = balance / pillarPrice
        setPillar(pillarAmount)
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false))
  }, [balance])

  return (
    <div>
      <Balance setBalance={setBalance} balance ={balance}/>
      {loading ? <Loader/> : <House pillar={pillar}/>}
    </div>
  )
}

export default App;
