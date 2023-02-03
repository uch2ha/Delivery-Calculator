import React from 'react';
import './HistoryCard.css';
import { RiMoneyEuroCircleLine } from 'react-icons/ri';
import { TiDeleteOutline } from 'react-icons/ti';
import { IDeliveryFeeData } from '../../interfaces/DeliveryFeeData.interface';
import { removeOneItemLocalStorage } from '../../functionality/localStotage';
import { useNavigate } from 'react-router-dom';
import moment from 'moment-timezone';

interface IProps extends IDeliveryFeeData {}

const HistoryCard: React.FC<IProps> = (props) => {
  const navigate = useNavigate();
  const { id, cartValue, distance, itemsAmount, userDate, deliveryPrice } =
    props;

  const convertTimeByBrowserTimeZome = (time: string): string => {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    return moment(userDate).tz(tz).format('dd DD/MM/yyyy HH.mm');
  };

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
        <div
          data-testid='delete-one'
          className='card-delete-btn'
          onClick={() => {
            if (window.confirm('Are you sure you want to delete this item')) {
              removeOneItemLocalStorage(id);
              // navigate(0);
              window.location.reload();
            }
          }}
        >
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
          <span>{convertTimeByBrowserTimeZome(userDate)}</span>
        </div>
      </div>
      <div className='card-result'>
        <div>
          <span>Delivery price</span>
          <div>
            <span data-testid='result'>= {deliveryPrice}</span>
            <RiMoneyEuroCircleLine size={30} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoryCard;
