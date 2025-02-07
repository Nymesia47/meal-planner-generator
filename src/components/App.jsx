import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import MyMealsPage from "./pages/MyMealsPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/my-meals" element={<MyMealsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
