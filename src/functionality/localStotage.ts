import { IDeliveryFeeData } from '../interfaces/DeliveryFeeData.interface';

export const updateLocalStorage = (item: IDeliveryFeeData) => {
  const stringData = localStorage.getItem('DeliveryFeeData');
  // if local storage is empty add first item to it
  if (!stringData)
    return localStorage.setItem('DeliveryFeeData', JSON.stringify([item]));

  const data = JSON.parse(stringData);

  let isDuplicate = false;

  data.forEach((el: IDeliveryFeeData) => {
    const { cartValue, distance, itemsAmount, userDate } = el;
    const {
      cartValue: cartValue2,
      distance: distance2,
      itemsAmount: itemsAmount2,
      userDate: userDate2,
    } = item;
    // check if array contains same item as current
    if (
      cartValue === cartValue2 &&
      distance === distance2 &&
      itemsAmount === itemsAmount2 &&
      userDate === userDate2
    ) {
      isDuplicate = true;
    }
  });

  if (isDuplicate) return;

  data.push(item);
  //set updated array of items to local storage
  return localStorage.setItem('DeliveryFeeData', JSON.stringify(data));
};

export const fetchLocalStorage = () => {};
