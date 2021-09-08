import './App.css';
import axios from 'axios';
import Building from './Components/Building';

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
  return (
    <div className="App">
      <Building/>
    </div>
  );
}

export default App;
