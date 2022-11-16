import { useState } from "react";
import { AppFooter, AppHeader, AppNav, NewsLetter } from "./components";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <AppHeader />
      <AppNav />
      <Outlet />
      <NewsLetter />
      <AppFooter />
    </div>
  );
}

export default App;
