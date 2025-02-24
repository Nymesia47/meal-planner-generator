import { Route, Routes } from "react-router-dom";
import "../styles/Reset.scss";
import LandingPage from "./pages/LandingPage";
import MealsListsPage from "./pages/MealsListsPage";


function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/meals" element={<MealsListsPage />} />
    </Routes>
  );
}

export default App;
