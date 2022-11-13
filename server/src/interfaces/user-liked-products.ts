export interface IUserLikedProducts {
  _id: any;
  listProducts: {
    id: number;
    brand: string;
    name: string;
    imageUrl: string;
    currentPrice: number;
    previousPrice: number;
    isFavorite: Boolean;
    amount: number;
    size: number;
  }[];
}
