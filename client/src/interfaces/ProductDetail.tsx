export interface ProductDetail {
  brand: {
    brandId?: number;
    name: string;
    description?: string;
  };
  gender?: string;
  name: string;
  id?: number;
  info?: {
    aboutMe: string;
    careInfo: string;
  };
  media: {
    catwalk?: string[];
    images: {
      url: string;
    }[];
  };
  price: {
    currency?: string;
    current: {
      value?: number;
      text: string;
    };
    previous?: { value: null | number; text: string };
  };
}
