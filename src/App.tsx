import { useState } from "react";
import {
  AppFooter,
  AppHeader,
  AppNav,
  HotDeal,
  NewProducts,
  NewsLetter,
  ShopCollections,
  TopSelling,
  TopSellingSmall,
} from "./components";

function App() {
  return (
    <div className="App">
      <AppHeader />
      <AppNav />
      <ShopCollections />
      <NewProducts />
      <HotDeal />
      <TopSelling />
      <TopSellingSmall />
      <NewsLetter />
      <AppFooter />
    </div>
  );
}

export default App;
