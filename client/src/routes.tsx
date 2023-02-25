import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { PassengerPage } from "./pages/PassengerPage";
import { SelectSeatsPage } from "./pages/SelectSeatsPage";

export const MyRoutes = (
  <BrowserRouter>
    <Routes>
      <Route path={"/"} element={<Home />} />
      <Route path={"/select-seats"} element={<SelectSeatsPage />} />
      <Route path={"/passenger"} element={<PassengerPage />} />
    </Routes>
  </BrowserRouter>
);
