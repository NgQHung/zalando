export interface IPurchasedProducts {
  //   _id: any;

  data: {
    id: number;
    size: string;
  }[];
}

export interface IAllPurchasedProducts {
  //   _id: any;

  data: {
    id: number;
    size: string;
  }[];
  methodPayment: string;
}
