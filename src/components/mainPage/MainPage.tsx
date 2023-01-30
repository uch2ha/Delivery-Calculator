import React, { useState } from 'react';
import NavBar from '../navBar/NavBar';

const MainPage: React.FC = (): JSX.Element => {
  const [cartValue, setCartValue] = useState(0);
  const [distance, setDistance] = useState(0);
  const [itemsAmount, setItemsAmount] = useState(0);
  const [date, setDate] = useState('');
  const [deliveryPrice, setDeliveryPrice] = useState(0);

  console.log(date);

  return (
    <div className='root-container'>
      <NavBar />
      <div className='calculator-container'>
        <span className='calculator-logo'>Delivery Fee Calculator</span>
        <div className='calculator-inputs'>
          <span>
            Cart value
            <input type='number' value={cartValue} />€
          </span>
          <span>
            Delivery distance
            <input value={distance} />m
          </span>
          <span>
            Amount of items
            <input value={itemsAmount} />
          </span>
          <span>
            Date
            <input
              type='date'
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </span>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
