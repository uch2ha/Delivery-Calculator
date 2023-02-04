import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import MainPage from '../../components/mainPage/MainPage';
import { useNavigate } from 'react-router-dom';
import '@testing-library/jest-dom';

jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
}));

describe('MainPage component', () => {
  afterEach(cleanup);

  it('renders the component', () => {
    const { getByText } = render(<MainPage />);
    expect(getByText(/Delivery Fee Calculator/i)).toBeInTheDocument();
    expect(getByText(/Calculate delivery price/i)).toBeInTheDocument();
    expect(getByText(/Refresh/i)).toBeInTheDocument();
  });

  it('handles input change correctly', () => {
    const { getByTestId } = render(<MainPage />);
    fireEvent.change(getByTestId('cartValue'), {
      target: { value: '100' },
    });
    expect(getByTestId('cartValue').value).toBe('100');
  });

  it('calculates delivery fee correctly', () => {
    const { getByTestId, getByText } = render(<MainPage />);
    fireEvent.change(getByTestId('cartValue'), {
      target: { value: '10' },
    });
    fireEvent.change(getByTestId('distance'), {
      target: { value: '10' },
    });
    fireEvent.change(getByTestId('itemsAmount'), {
      target: { value: '5' },
    });
    fireEvent.change(getByTestId('date'), {
      target: { value: '2023-01-01T10:00' },
    });
    fireEvent.click(getByText(/Calculate delivery price/i));
    expect(getByTestId('result')).toHaveTextContent('= 2.5');
  });

  it('refreshes the inputs correctly', () => {
    const { getByTestId, getByText } = render(<MainPage />);
    fireEvent.change(getByTestId('cartValue'), {
      target: { value: '100' },
    });
    fireEvent.change(getByTestId('distance'), {
      target: { value: '10' },
    });
    fireEvent.change(getByTestId('itemsAmount'), {
      target: { value: '5' },
    });
    fireEvent.click(getByText('Refresh'));
    expect(getByTestId('cartValue').value).toBe('0');
    expect(getByTestId('distance').value).toBe('0');
    expect(getByTestId('itemsAmount').value).toBe('0');
  });
});
