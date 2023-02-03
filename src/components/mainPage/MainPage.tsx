import './MainPage.css';
import React, { useState } from 'react';
import NavBar from '../navBar/NavBar';
import moment from 'moment-timezone';
import calculateDeliveryFee from '../../functionality/calculations';
import { updateLocalStorage } from '../../functionality/localStotage';
import { useNavigate } from 'react-router-dom';
import Calculator from '../calculator/Calculator';
import { v4 as uuidv4 } from 'uuid';

const MainPage: React.FC = (): JSX.Element => {
  const navigate = useNavigate();
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

    const id = uuidv4();

    const deliveryPrice = calculateDeliveryFee({
      id,
      cartValue,
      distance,
      itemsAmount,
      utcDate,
      userDate,
    });

    setDeliveryPrice(deliveryPrice);

    updateLocalStorage({
      id,
      cartValue,
      distance,
      itemsAmount,
      userDate,
      deliveryPrice,
    });
  };

  const handleRefresh = () => {
    setCartValue(0);
    setDistance(0);
    setItemsAmount(0);
    setUserDate('');
    setUtcDate(moment);
    setDeliveryPrice(0);
  };

  return (
    <div className='root-container'>
      <NavBar />
      <div className='calculator-container'>
        <div className='calculator-logo btn' onClick={() => navigate('/about')}>
          <span>Delivery Fee Calculator</span>
        </div>
        <Calculator
          cartValue={cartValue}
          distance={distance}
          itemsAmount={itemsAmount}
          userDate={userDate}
          deliveryPrice={deliveryPrice}
          handleInput={handleInput}
          calculateDeliveryHandler={calculateDeliveryHandler}
          handleRefresh={handleRefresh}
        />
      </div>
    </div>
  );
};

export default MainPage;
