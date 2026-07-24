import React from 'react';
import officeImage from './office.jpg';
import './App.css';

function App() {
  const element = 'Office Space';

  const offices = [
    {
      Name: 'DBS',
      Rent: 50000,
      Address: 'Chennai'
    }
  ];

  return (
    <div>
      <h1>{element}, at Affordable Range</h1>

      <img
        src={officeImage}
        width="25%"
        height="25%"
        alt="Office Space"
      />

      {offices.map((ItemName) => (
        <div key={ItemName.Name}>
          <h1>Name: {ItemName.Name}</h1>

          <h3 className={ItemName.Rent <= 60000 ? 'textRed' : 'textGreen'}>
            Rent: ₹{ItemName.Rent}
          </h3>

          <h3>Address: {ItemName.Address}</h3>
        </div>
      ))}
    </div>
  );
}

export default App;