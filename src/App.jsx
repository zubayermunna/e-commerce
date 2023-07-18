import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SellerPanel from "./pages/SellerPanel";
import { SellerProductAdd } from "./components";
import SignUpLoginForm from "./pages/UserRegistration";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/seller"
          element={
            <SellerPanel>
              <SellerProductAdd />
            </SellerPanel>
          }
        ></Route>
        <Route path="/login" element={<SignUpLoginForm />}></Route>
      </Routes>
    </>
  );
}

export default App;
