import { useEffect, useState } from 'react'

import './App.css';
import quesoContainer from './quesoContainer';


function App() {

  const [quesos, setQuesos] = useState([])

  const getQuesos = () => {
    fetch('http://localhost:3000/quesos')
    .then(response => response.json())
    .then(apiQuesos => setQuesos(apiQuesos))
}

  useEffect(getQuesos, [])


  return (
    <div className="App">
      <quesoContainer quesos={quesos} />
    </div>
  );
}

export default App;
