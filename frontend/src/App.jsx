import { useState, useEffect } from 'react';
import './App.css'

function App() {
  const [predictions, setpredictions] = useState([])

  useEffect(() => {
    fetchPredictions()
  }, []);

  const fetchPredictions = async () => {
    const response = await fetch("http://127.0.0.1:5000/predictions");
    const data = await response.json();
    setpredictions(data.salespredictions);
    console.log(data.salespredictions);
  };
  
  return (
    <>
    
    </>
  );
}

export default App;
