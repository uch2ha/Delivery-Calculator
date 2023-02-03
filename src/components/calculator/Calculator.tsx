import './Calculator.css';
import React from 'react';
import { RiMoneyEuroCircleLine } from 'react-icons/ri';

interface IProps {
  cartValue: number;
  distance: number;
  itemsAmount: number;
  userDate: string;
  deliveryPrice: number;
  handleInput: React.ChangeEventHandler<HTMLInputElement>;
  calculateDeliveryHandler: Function;
  handleRefresh: Function;
}

const Calculator: React.FC<IProps> = ({
  cartValue,
  distance,
  itemsAmount,
  userDate,
  deliveryPrice,
  handleInput,
  calculateDeliveryHandler,
  handleRefresh,
}) => {
  return (
    <>
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
              data-testid='cartValue'
            />
            <RiMoneyEuroCircleLine size={30} />
          </span>
        </div>
        <div>
          <span className='input-name'>Delivery distance</span>
        </div>
        <div>
          <span className='input-body delivery-icon'>
            <input
              type='text'
              id='distance'
              value={distance}
              onChange={handleInput}
              data-testid='distance'
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
              data-testid='itemsAmount'
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
              data-testid='date'
            />
          </span>
        </div>
      </div>
      <div className='calculator-btn'>
        <div
          className='btn-calculate btn'
          onClick={() => calculateDeliveryHandler()}
        >
          <span>Calculate delivery price</span>
        </div>
        <div className='btn-refresh btn' onClick={() => handleRefresh()}>
          <span>Refresh</span>
        </div>
      </div>
      <div className='calculator-result'>
        <div>
          <span>Delivery price</span>
          <div>
            <span data-testid='result'>= {deliveryPrice}</span>
            <RiMoneyEuroCircleLine size={30} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Calculator;
