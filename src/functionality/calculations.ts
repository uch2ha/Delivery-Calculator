import { IDeliveryFeeData } from '../interfaces/DeliveryFeeData.interface';
import moment from 'moment-timezone';

const calculateDeliveryFee = (data: IDeliveryFeeData): number => {
  const { cartValue, distance, itemsAmount, utcDate } = data;
  let deliveryPrice = 0;

  if (cartValue >= 100) return 0;

  deliveryPrice += cartValueFn(cartValue);
  deliveryPrice += distanceFn(distance);
  deliveryPrice += itemsAmountFn(itemsAmount);
  if (utcDate) deliveryPrice *= dateFn(utcDate) ? 1.2 : 1;

  return deliveryPrice >= 15 ? 15 : deliveryPrice;
};

const cartValueFn = (value: number): number => {
  if (value < 10) return 10 - value;
  return 0;
};

const distanceFn = (meters: number): number => {
  let resultFee = 2;

  meters = meters - 1000;

  if (meters > 0) {
    resultFee += Math.ceil(meters / 500);
  }

  return resultFee;
};

const itemsAmountFn = (quantity: number): number => {
  let resultFee = 0;

  if (quantity >= 5) {
    resultFee += 0.5 * (quantity - 4);
  }

  if (quantity > 12) {
    resultFee += 1.2;
  }

  return resultFee;
};

const dateFn = (day: moment.Moment): boolean => {
  // check if day is Friday
  if (day.weekday() === 5) {
    // check if time is between 15 and 19 hours
    if (day.utc().hours() <= 19 && day.utc().hours() >= 15) return true;
  }
  return false;
};

export default calculateDeliveryFee;
