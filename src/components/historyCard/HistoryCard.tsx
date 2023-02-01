import React from 'react';
import './HistoryCard.css';
import { RiMoneyEuroCircleLine } from 'react-icons/ri';
import { TiDeleteOutline } from 'react-icons/ti';
const HistoryCard = () => {
  return (
    <div className='history-card-container'>
      <div className='value-row'>
        <div className='card-name'>
          <span>Cart value</span>
        </div>
        <div className='card-amount'>
          <span>20 </span>
          <span>
            <RiMoneyEuroCircleLine size={30} />
          </span>
        </div>
        <div className='card-delete-btn'>
          <TiDeleteOutline />
        </div>
      </div>
      <div className='value-row'>
        <div className='card-name'>
          <span>Delivery distance</span>
        </div>
        <div className='card-amount'>
          <span>2000</span>
          <span className='delivery-icon'>m</span>
        </div>
      </div>
      <div className='value-row'>
        <div className='card-name'>
          <span>Amount of items</span>
        </div>
        <div className='card-amount'>
          <span>20</span>
        </div>
      </div>
      <div className='value-row'>
        <div className='card-name'>
          <span>Time</span>
        </div>
        <div className='card-amount'>
          <span>20</span>
        </div>
      </div>
      <div className='card-result'>
        <div>
          <span>Delivery price</span>
          <div>
            <span>= 20</span>
            <RiMoneyEuroCircleLine size={30} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoryCard;
