import {
  HotDeal,
  NewProducts,
  ShopCollections,
  TopSelling,
  TopSellingSmall,
} from "../components";

export const Home = () => {
  return (
    <>
      <ShopCollections />
      <NewProducts />
      <HotDeal />
      <TopSelling />
      <TopSellingSmall />
    </>
  );
};
