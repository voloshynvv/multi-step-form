export const getPrice = (price: number, type: 'monthly' | 'yearly' = 'monthly') => {
  return `$${price}/${type === 'monthly' ? 'mo' : 'yr'}`;
};
