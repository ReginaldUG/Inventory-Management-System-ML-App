import { useState, useEffect } from 'react';
import './predictionTable.css';

const PredictionsTable = () => {
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
    <div className='predictions-container'>
      <h3>Predicted Sales</h3>
      <table className='predictions-table'>
        <thead>
          <tr>
            <th>Date</th>
            <th>Article</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {predictions.map((prediction, index) => (
            <tr key={index}>
              <td>{prediction.date}</td>
              <td>{prediction.article}</td>
              <td>{prediction.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PredictionsTable;
