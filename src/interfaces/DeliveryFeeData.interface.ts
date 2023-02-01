import moment from 'moment-timezone';

export interface IDeliveryFeeData {
  id: string;
  cartValue: number;
  distance: number;
  itemsAmount: number;
  userDate?: string;
  utcDate?: moment.Moment;
  deliveryPrice?: number;
}
