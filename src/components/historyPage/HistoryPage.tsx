import './HistoryPage.css';
import React, { useState } from 'react';
import NavBar from '../navBar/NavBar';
import HistoryCard from '../historyCard/HistoryCard';
import { IDeliveryFeeData } from '../../interfaces/DeliveryFeeData.interface';

const HistoryPage: React.FC = (): JSX.Element => {
  const [data, setData] = useState<IDeliveryFeeData[]>([]);
  return (
    <div className='root-container'>
      <NavBar />
      <div className='history-delete-all-btn'>
        <span>DELETE ALL</span>
      </div>
      <div className='history-container'>
        <div className='history-card-grid'>{/* <HistoryCard /> */}</div>
      </div>
    </div>
  );
};

export default HistoryPage;
