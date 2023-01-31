import moment from 'moment-timezone';

export interface IdeliveryFeeData {
  cartValue: number;
  distance: number;
  itemsAmount: number;
  date: moment.Moment;
  delivery_price?: number;
}
