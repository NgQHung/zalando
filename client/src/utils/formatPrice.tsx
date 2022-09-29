export const formatPrice = (x: number | undefined) => {
  return `$${Number(x).toFixed(2)}`;
};
