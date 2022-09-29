export interface productShoppingCart {
  id: number;
  brand: string;
  name: string;
  imageUrl: string;
  currentPrice: number;
  previousPrice?: number;
  amount: number;
  size: string;
  totalProduct: number;
}
