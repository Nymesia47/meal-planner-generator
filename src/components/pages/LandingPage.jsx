import Header from "../layoutComponents/Header";
import Footer from "../layoutComponents/Footer";
import ActionsPanel from "../layoutComponents/ActionsPanel";
import ResultsSection from "../layoutComponents/ResultSection";
import { useState } from "react";

function LandingPage() {

  const [dinnerOptions, setDinnerOptions] = useState([
    {title : "Spinach's Hamburger", plate_id : 1},
    {title : "Sausages", plate_id : 2},
    {title : "Empanadillas", plate_id : 3},
    {title : "Pescado en salsa rubia", plate_id : 4},
    {title : "Courgette's Frittata", plate_id : 5},
    {title : "Quesadillas", plate_id : 6},
    {title : "Cream of Vegetables", plate_id : 7},
    {title : "Quesadillas", plate_id : 8},
    {title : "Pastina", plate_id : 9},
    {title : "Cocido de arroz", plate_id : 10},
    {title : "Courgette Penwheels", plate_id : 11},
    {title : "Mini CheeseBurgers", plate_id : 12},
    {title : "Eggs Muffins", plate_id: 13}
  ]);

  const planningData_initial_state = { days: [] };

  const [planningData, setPlanningData] = useState(planningData_initial_state);



  return (
    <div>
      <Header />
      <main>
        <ActionsPanel planningData={planningData} setPlanningData={setPlanningData}/>
        <ResultsSection />  
      </main>
      <Footer />
    </div>
  )
}

export default LandingPage