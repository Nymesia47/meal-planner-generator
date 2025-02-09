import { Route, Routes } from "react-router-dom";
import "../styles/Reset.scss";
import LandingPage from "./pages/LandingPage";
import MealsListsPage from "./pages/MealsListsPage";


function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/my-meals" element={<MealsListsPage />} />
    </Routes>
  );
}

export default App;
