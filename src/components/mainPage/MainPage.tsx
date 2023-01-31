import React, { useState } from 'react';
import './MainPage.css';
import NavBar from '../navBar/NavBar';

const MainPage: React.FC = (): JSX.Element => {
  const [cartValue, setCartValue] = useState(0);
  const [distance, setDistance] = useState(0);
  const [itemsAmount, setItemsAmount] = useState(0);
  const [date, setDate] = useState('');
  const [deliveryPrice, setDeliveryPrice] = useState(0);

  console.log(date);

  const handleInput: React.ChangeEventHandler<HTMLInputElement> = (e): void => {
    const { id, value } = e.target;

    if (!Number(value)) {
      return;
    }
    if (id === 'cartValue') {
      setCartValue(Number(value));
    }
    if (id === 'distance') {
      setDistance(Number(value));
    }
    if (id === 'itemsAmount') {
      setItemsAmount(Number(value));
    }
  };

  return (
    <div className='root-container'>
      <NavBar />
      <div className='calculator-container'>
        <div className='calculator-logo'>
          <span>Delivery Fee Calculator</span>
        </div>
        <div className='calculator-inputs'>
          <div>
            <span className='input-name'>Cart value</span>
          </div>
          <div>
            <span className='input-body'>
              <input
                type='text'
                id='cartValue'
                value={cartValue}
                onChange={handleInput}
              />
              €
            </span>
          </div>
          <div>
            <span className='input-name'>Delivery distance</span>
          </div>
          <div>
            <span className='input-body'>
              <input
                type='text'
                id='distance'
                value={distance}
                onChange={handleInput}
              />
              m
            </span>
          </div>
          <div>
            <span className='input-name'>Amount of items</span>
          </div>
          <div>
            <span className='input-body'>
              <input
                type='text'
                id='itemsAmount'
                value={itemsAmount}
                onChange={handleInput}
              />
            </span>
          </div>
          <div>
            <span className='input-name'>Date</span>
          </div>
          <div>
            <span className='input-body'>
              <input
                type='date'
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
              Icon
            </span>
          </div>
        </div>
        <div className='calculator-btn'>
          <button>Calculate delivery price</button>
        </div>
        <div className='calculator-result'>
          <span>Delivery price</span>
          <span>= 2€</span>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
