import { BrowserRouter, Route, Routes } from "react-router-dom";
import { BoardingPass } from "./pages/BoardingPass";
import Home from "./pages/Home";
import { PassengerPage } from "./pages/PassengerPage";
import { PaymentPage } from "./pages/PaymentPage";
import { SelectSeatsPage } from "./pages/SelectSeatsPage";

export const MyRoutes = (
  <BrowserRouter>
    <Routes>
      <Route path={"/"} element={<Home />} />
      <Route path={"/select-seats"} element={<SelectSeatsPage />} />
      <Route path={"/passenger"} element={<PassengerPage />} />
      <Route path={"/payment"} element={<PaymentPage />} />
      <Route path={"/boarding-pass"} element={<BoardingPass />} />
    </Routes>
  </BrowserRouter>
);
