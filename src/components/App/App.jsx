import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "../Header/Header.jsx";
// import css from "./App.module.css";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage.jsx"));
const CatalogPage = lazy(() =>
  import("../../pages/CatalogPage/CatalogPage.jsx")
);
const CarPage = lazy(() => import("../../pages/CarPage/CarPage.jsx"));
const NotFoundPage = lazy(() =>
  import("../../pages/NotFoundPage/NotFoundPage.jsx")
);

function App() {
  return (
    <>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/catalog" element={<CatalogPage />}></Route>
          <Route path="/catalog/:id" element={<CarPage />}></Route>
          <Route path="*" element={<NotFoundPage />}></Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
