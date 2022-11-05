export interface Product {
  _id: string;
  nameProduct: string;
  price: number;
  brand: {name: string, photos: [string]};
  photos: [string];
  description: string;
  promotion: boolean;
  oldPrice: string;
  bestSell: boolean;
  quantity:number;
}
