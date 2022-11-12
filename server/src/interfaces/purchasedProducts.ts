import IAddressDelivery from './addressDelivery';
export default interface IPurchasedProducts {
  _id: any;
  //   id: { type: String };
  listProducts: [
    {
      data: {
        id: number;
        size: string;
      }[];
      methodPayment: string;
    }
  ];
}
