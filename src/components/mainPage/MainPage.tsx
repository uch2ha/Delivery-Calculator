import './MainPage.css';
import React, { useState } from 'react';
import NavBar from '../navBar/NavBar';
import moment from 'moment-timezone';
import calculateDeliveryFee from '../../functionality/calculations';

const MainPage: React.FC = (): JSX.Element => {
  const [cartValue, setCartValue] = useState(0);
  const [distance, setDistance] = useState(0);
  const [itemsAmount, setItemsAmount] = useState(0);
  const [userDate, setUserDate] = useState('');
  const [utcDate, setUtcDate] = useState(moment);
  const [deliveryPrice, setDeliveryPrice] = useState(0);

  const handleInput: React.ChangeEventHandler<HTMLInputElement> = (e): void => {
    const { id, value } = e.target;

    if (id === 'date') {
      setUserDate(value);
      setUtcDate(fundTimeZoneConverTimeToUTC(value));
    }
    if (value.length >= 17) {
      return;
    }
    if (!Number(value) && value !== '') {
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

  const fundTimeZoneConverTimeToUTC = (time: string) => {
    // get timezone from browser
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    // create date with browser timezon
    const date = moment(time).tz(tz);
    // return date with UTC format
    return moment(date.utc().format());
  };

  const calculateDeliveryHandler = () => {
    if (cartValue === 0 || distance === 0 || itemsAmount === 0) return;
    setDeliveryPrice(
      calculateDeliveryFee({ cartValue, distance, itemsAmount, date: utcDate })
    );
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
            <span className='input-body delivery-input'>
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
            <span className='input-name'>Time</span>
          </div>
          <div>
            <span className='input-body'>
              <input
                className='date-input'
                id='date'
                type='datetime-local'
                value={userDate}
                onChange={handleInput}
              />
              Icon
            </span>
          </div>
        </div>
        <div className='calculator-btn'>
          <button onClick={() => calculateDeliveryHandler()}>
            Calculate delivery price
          </button>
        </div>
        <div className='calculator-result'>
          <div>
            <span>Delivery price</span>
            <span>= {deliveryPrice}€</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
