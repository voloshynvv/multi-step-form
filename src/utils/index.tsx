import { type Type } from '~/store/useFormStore';

export const getPrice = (price: number, type: Type = 'monthly') => {
  return `$${price}/${type === 'monthly' ? 'mo' : 'yr'}`;
};
