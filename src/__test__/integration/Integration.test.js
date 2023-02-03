import {
  render,
  screen,
  fireEvent,
  waitFor,
  cleanup,
} from '@testing-library/react';
import MainPage from '../../components/mainPage/MainPage.js';
import HistoryPage from '../../components/historyPage/HistoryPage.js';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';

// create additional calc elements
const makeCalculationsAndTestIt = async (
  cartValue,
  distance,
  itemsAmount,
  date,
  result
) => {
  const calculateBtn = screen.getByText(/Calculate delivery price/i);
  const cartValueInput = screen.getByTestId(/cartValue/i);
  const distanceInput = screen.getByTestId(/distance/i);
  const itemsAmountInput = screen.getByTestId(/itemsAmount/i);
  const userDateInput = screen.getByTestId(/date/i);
  const resultSpan = screen.getByTestId(/result/i);

  // enter value in the input field
  fireEvent.change(cartValueInput, {
    target: { value: cartValue },
  });
  fireEvent.change(distanceInput, {
    target: { value: distance },
  });
  fireEvent.change(itemsAmountInput, {
    target: { value: itemsAmount },
  });
  fireEvent.change(userDateInput, {
    target: { value: date },
  });

  await waitFor(() => {
    expect(cartValueInput.value).toBe(cartValue);
    expect(distanceInput.value).toBe(distance);
    expect(itemsAmountInput.value).toBe(itemsAmount);
    expect(userDateInput.value).toBe(date);
  });

  // click calculate button
  await fireEvent.click(calculateBtn);

  await waitFor(() => {
    expect(resultSpan).toHaveTextContent(`= ${result}`);
  });
};

describe('Integration tests', () => {
  // before and after all tests cleans the local storage to avoid errors
  beforeAll(() => {
    localStorage.removeItem('DeliveryFeeData');
  });

  afterAll(() => {
    localStorage.removeItem('DeliveryFeeData');
  });

  it('Checking the presence of information on the main page', async () => {
    render(
      <BrowserRouter>
        <MainPage />
      </BrowserRouter>
    );

    const logo = screen.getByText(/Delivery Fee Calculator/i);
    const calculateBtn = screen.getByText(/Calculate delivery price/i);
    const refreshBtn = screen.getByText(/Refresh/i);

    expect(logo).toBeInTheDocument();
    expect(calculateBtn).toBeInTheDocument();
    expect(refreshBtn).toBeInTheDocument();
  });

  it('Test calculate functionality and refresh btn', async () => {
    render(
      <BrowserRouter>
        <MainPage />
      </BrowserRouter>
    );

    const refreshBtn = screen.getByText(/Refresh/i);
    const cartValueInput = screen.getByTestId(/cartValue/i);
    const distanceInput = screen.getByTestId(/distance/i);
    const itemsAmountInput = screen.getByTestId(/itemsAmount/i);
    const resultSpan = screen.getByTestId(/result/i);

    await makeCalculationsAndTestIt(
      '10',
      '1000',
      '10',
      '2023-01-06T10:00',
      '5'
    );

    // click refresh button
    fireEvent.click(refreshBtn);

    await waitFor(() => {
      expect(cartValueInput.value).toBe('0');
      expect(distanceInput.value).toBe('0');
      expect(itemsAmountInput.value).toBe('0');
      expect(resultSpan).toHaveTextContent('= 0');
    });
  });

  it('Add 2 more calc elements and check the presence of information on history page', async () => {
    render(
      <BrowserRouter>
        <MainPage />
      </BrowserRouter>
    );

    await makeCalculationsAndTestIt(
      '5',
      '5000',
      '50',
      '2023-02-03T20:00',
      '15'
    );
    await makeCalculationsAndTestIt('55', '1200', '1', '2023-02-07T12:00', '3');

    // clear rendered page
    await cleanup();

    render(
      <BrowserRouter>
        <HistoryPage />
      </BrowserRouter>
    );

    const cards = await screen.findAllByText(/cart value/i);
    const results = await screen.findAllByTestId(/result/i);

    // 1 was added in previous test, secend and third was added in current test
    expect(cards.length).toBe(3);
    expect(results.length).toBe(3);

    await waitFor(() => {
      expect(results[0]).toHaveTextContent('= 5');
      expect(results[1]).toHaveTextContent('= 15');
      expect(results[2]).toHaveTextContent('= 3');
    });
  });

  it('Test deleteOne and deleteAll btn functionality', async () => {
    render(
      <BrowserRouter>
        <HistoryPage />
      </BrowserRouter>
    );

    // Checking delete one functionality
    const deleteOneBtns = await screen.findAllByTestId(/delete-one/i);
    const cards = await screen.findAllByText(/cart value/i);

    expect(cards.length).toBe(3);

    window.confirm = jest.fn(() => true);
    delete window.location;
    window.location = { reload: jest.fn() };

    await fireEvent.click(deleteOneBtns[0]);

    // clear rendered page
    await cleanup();

    render(
      <BrowserRouter>
        <HistoryPage />
      </BrowserRouter>
    );

    const cardsUpdate2 = await screen.findAllByText(/cart value/i);

    expect(cardsUpdate2.length).toBe(2);

    // Checking delete all functionality
    const deleteAllBtns = await screen.getByTestId(/delete-all/i);

    await fireEvent.click(deleteAllBtns);

    // clear rendered page
    await cleanup();

    render(
      <BrowserRouter>
        <HistoryPage />
      </BrowserRouter>
    );

    const cardsUpdate3 = await screen.queryAllByText(/cart value/i);

    expect(cardsUpdate3.length).toBe(0);
  });
});
