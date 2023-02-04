import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';
import moment from 'moment-timezone';
import HistoryCard from '../../components/historyCard/HistoryCard';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import { removeOneItemLocalStorage } from '../../functionality/localStotage';

jest.mock('../../functionality/localStotage', () => ({
  removeOneItemLocalStorage: jest.fn(),
}));

const mockRemoveOneItemLocalStorage = removeOneItemLocalStorage;

const props = {
  id: '123',
  cartValue: 10,
  distance: 100,
  itemsAmount: 2,
  userDate: '2021-05-20T12:00:00.000Z',
  deliveryPrice: 5,
};

const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
const formattedDate = moment(props.userDate)
  .tz(timeZone)
  .format('dd DD/MM/yyyy HH.mm');

describe('HistoryCard component', () => {
  it('should render correctly', () => {
    const { getByTestId, getByText } = render(
      <BrowserRouter>
        <HistoryCard {...props} />
      </BrowserRouter>
    );
    expect(getByTestId('result')).toHaveTextContent(`= ${props.deliveryPrice}`);
    expect(getByText(formattedDate)).toBeInTheDocument();
  });

  it('should call removeOneItemLocalStorage when delete button is clicked', () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <HistoryCard {...props} />
      </BrowserRouter>
    );
    window.confirm = jest.fn(() => true);
    delete window.location;
    window.location = { reload: jest.fn() };
    fireEvent.click(getByTestId('delete-one'));
    expect(mockRemoveOneItemLocalStorage).toHaveBeenCalledWith(props.id);
  });

  it('should confirm with the user before deleting', () => {
    window.confirm = jest.fn(() => true);
    const { getByTestId } = render(
      <BrowserRouter>
        <HistoryCard {...props} />
      </BrowserRouter>
    );
    fireEvent.click(getByTestId('delete-one'));
    expect(window.confirm).toHaveBeenCalled();
    expect(mockRemoveOneItemLocalStorage).toHaveBeenCalledWith(props.id);
  });
});
