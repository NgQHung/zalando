export interface SelectedProduct {
  id: number;
  brand: string;
  name: string;
  imageUrl: string;
  currentPrice: number;
  previousPrice: number;
  isFavorite: boolean;
  amount: number;
  size: string;
  totalProduct: number;
}
