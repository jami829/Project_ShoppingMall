// cartItemsVar에 담길 데이터들의 모델링

export interface Product {
  id: string;
  name: string;
  price: string;
  imgUrl: string;
}

export interface CartItem {
  id: string;
  product: Product;
  amount: number;
}

export type CartItems = CartItem[];