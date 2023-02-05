import { IDeliveryFeeData } from '../interfaces/DeliveryFeeData.interface';

// add item to local storage array
export const updateLocalStorage = (item: IDeliveryFeeData): void => {
  const stringData = localStorage.getItem('DeliveryFeeData');

  // if local storage is empty add first item to it
  if (!stringData)
    return localStorage.setItem('DeliveryFeeData', JSON.stringify([item]));

  const data = JSON.parse(stringData);

  let isDuplicate = false;

  // check if array contains same item as current
  data.forEach((el: IDeliveryFeeData) => {
    const { cartValue, distance, itemsAmount, userDate } = el;
    const {
      cartValue: cartValue2,
      distance: distance2,
      itemsAmount: itemsAmount2,
      userDate: userDate2,
    } = item;

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

// get and return data from local storage
export const fetchLocalStorage = (): IDeliveryFeeData[] => {
  const stringData = localStorage.getItem('DeliveryFeeData');

  if (!stringData) return [];

  const data = JSON.parse(stringData);

  return data;
};

//removes a single item from local storage based on its id
export const removeOneItemLocalStorage = (id: string): void => {
  const stringData = localStorage.getItem('DeliveryFeeData');

  if (!stringData) return;

  const data = JSON.parse(stringData);

  const updatedData = data.filter((el: IDeliveryFeeData) => el.id !== id);

  localStorage.setItem('DeliveryFeeData', JSON.stringify(updatedData));
};

export const removeAllLocalStorage = (): void => {
  localStorage.removeItem('DeliveryFeeData');
};
