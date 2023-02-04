import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Calculator from '../../components/calculator/Calculator';

const mockHandleInput = jest.fn();
const mockCalculateDeliveryHandler = jest.fn();
const mockHandleRefresh = jest.fn();

describe('Calculator component', () => {
  let container;

  beforeEach(() => {
    container = render(
      <Calculator
        cartValue={0}
        distance={0}
        itemsAmount={0}
        userDate=''
        deliveryPrice={0}
        handleInput={mockHandleInput}
        calculateDeliveryHandler={mockCalculateDeliveryHandler}
        handleRefresh={mockHandleRefresh}
      />
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render correctly', () => {
    expect(container.baseElement).toMatchSnapshot();
  });

  it('should call handleInput when an input value changes', () => {
    const cartValueInput = container.getByTestId('cartValue');
    fireEvent.change(cartValueInput, { target: { value: '100' } });
    expect(mockHandleInput).toHaveBeenCalled();
  });

  it('should call calculateDeliveryHandler when calculate delivery price button is clicked', () => {
    const calculateBtn = container.getByText(/Calculate delivery price/i);
    fireEvent.click(calculateBtn);
    expect(mockCalculateDeliveryHandler).toHaveBeenCalled();
  });

  it('should call handleRefresh when refresh button is clicked', () => {
    const refreshBtn = container.getByText(/Refresh/i);
    fireEvent.click(refreshBtn);
    expect(mockHandleRefresh).toHaveBeenCalled();
  });
});
