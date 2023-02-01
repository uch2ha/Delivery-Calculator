import React from 'react';
import './HistoryCard.css';
import { RiMoneyEuroCircleLine } from 'react-icons/ri';
import { TiDeleteOutline } from 'react-icons/ti';
import { IDeliveryFeeData } from '../../interfaces/DeliveryFeeData.interface';

interface IProps extends IDeliveryFeeData {}

const HistoryCard: React.FC<IProps> = (props) => {
  const { id, cartValue, distance, itemsAmount, userDate, deliveryPrice } =
    props;
  return (
    <div className='history-card-container'>
      <div className='value-row'>
        <div className='card-name'>
          <span>Cart value</span>
        </div>
        <div className='card-amount'>
          <span>{cartValue}</span>
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
          <span>{distance}</span>
          <span className='delivery-icon'>m</span>
        </div>
      </div>
      <div className='value-row'>
        <div className='card-name'>
          <span>Amount of items</span>
        </div>
        <div className='card-amount'>
          <span>{itemsAmount}</span>
        </div>
      </div>
      <div className='value-row'>
        <div className='card-name'>
          <span>Time</span>
        </div>
        <div className='card-amount'>
          <span>{userDate}</span>
        </div>
      </div>
      <div className='card-result'>
        <div>
          <span>Delivery price</span>
          <div>
            <span>= {deliveryPrice}</span>
            <RiMoneyEuroCircleLine size={30} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoryCard;
