import './HistoryPage.css';
import React from 'react';
import NavBar from '../navBar/NavBar';
import HistoryCard from '../historyCard/HistoryCard';

const HistoryPage: React.FC = (): JSX.Element => {
  return (
    <div className='root-container'>
      <NavBar />
      <div className='history-delete-all-btn'>
        <span>DELETE ALL</span>
      </div>
      <div className='history-container'>
        <div className='history-card-grid'>
          <HistoryCard />
          <HistoryCard />
          <HistoryCard />
          <HistoryCard />
          <HistoryCard />
          <HistoryCard />
          <HistoryCard />
          <HistoryCard />
          <HistoryCard />
          <HistoryCard />
          <HistoryCard />
          <HistoryCard />
          <HistoryCard />
          <HistoryCard />
        </div>
      </div>
    </div>
  );
};

export default HistoryPage;
