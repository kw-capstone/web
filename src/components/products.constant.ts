export interface IProduct {
  id: number;
  img: string;
  category: string;
  name: string;
  price: string;
  oldPrice: string;
  isSale?: boolean;
  isNew?: boolean;
  rating: number;
  isTopSelling?: boolean;
}

export const products: IProduct[] = [
  {
    id: 0,
    img: "product07.png",
    category: "Category",
    name: "product name goes here",
    price: "$980.00",
    oldPrice: "$990.00",
    isTopSelling: true,
    isNew: true,
    rating: 4,
  },
  {
    id: 1,
    img: "product08.png",
    category: "Category",
    name: "product name goes here",
    price: "$980.00",
    oldPrice: "$990.00",
    isTopSelling: true,
    isSale: true,
    isNew: true,
    rating: 0,
  },
  {
    id: 2,
    img: "product09.png",
    category: "Category",
    name: "product name goes here",
    price: "$980.00",
    oldPrice: "$990.00",
    isTopSelling: true,
    rating: 5,
  },
  {
    id: 3,
    img: "product01.png",
    category: "Category",
    name: "product name goes here",
    price: "$980.00",
    oldPrice: "$990.00",
    isTopSelling: true,
    rating: 5,
  },
  {
    id: 4,
    img: "product02.png",
    category: "Category",
    name: "product name goes here",
    price: "$980.00",
    oldPrice: "$990.00",
    rating: 0,
  },
  {
    id: 5,
    img: "product03.png",
    category: "Category",
    name: "product name goes here",
    price: "$980.00",
    oldPrice: "$990.00",
    rating: 0,
  },
  {
    id: 6,
    img: "product04.png",
    category: "Category",
    name: "product name goes here",
    price: "$980.00",
    oldPrice: "$990.00",
    rating: 0,
  },
  {
    id: 7,
    img: "product05.png",
    category: "Category",
    name: "product name goes here",
    price: "$980.00",
    oldPrice: "$990.00",
    rating: 0,
  },
  {
    id: 8,
    img: "product06.png",
    category: "Category",
    name: "product name goes here",
    price: "$980.00",
    oldPrice: "$990.00",
    isSale: true,
    isNew: true,
    rating: 5,
    isTopSelling: true,
  },
];

export const chunkArr = (array: Array<IProduct>, size: number) => {
  const chunked_arr = [];
  let index = 0;
  while (index < array.length) {
    chunked_arr.push(array.slice(index, size + index));
    index += size;
  }
  return chunked_arr;
};
