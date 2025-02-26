import Header from "../layoutComponents/Header";
import Footer from "../layoutComponents/Footer";
import ActionsPanel from "../layoutComponents/ActionsPanel";
import ResultsSection from "../layoutComponents/ResultSection";
import { useState } from "react";
import PlanWeekForm from "../parts/PlanWeekForm";
import AddMealForm from "../parts/AddMealForm";

function LandingPage() {

  const [mealOptions, setMealOptions] = useState([
  { plate_id: 1, title: "Spinach's Hamburger", type: ["Dinner"] },
  { plate_id: 2, title: "Sausages", type: ["Dinner"] },
  { plate_id: 3, title: "Empanadillas", type: ["Dinner"] },
  { plate_id: 4, title: "Pescado en salsa rubia", type: ["Dinner"] },
  { plate_id: 5, title: "Courgette's Frittata", type: ["Breakfast", "Dinner"] },
  { plate_id: 6, title: "Quesadillas", type: ["Dinner"] },
  { plate_id: 7, title: "Cream of Vegetables", type: ["Dinner"] },
  { plate_id: 8, title: "Pastina", type: ["Dinner"] },
  { plate_id: 9, title: "Cocido de arroz", type: ["Lunch", "Dinner"] },
  { plate_id: 10, title: "Courgette Penwheels", type: ["Dinner"] },
  { plate_id: 11, title: "Mini CheeseBurgers", type: ["Dinner"] },
  { plate_id: 12, title: "Eggs Muffins", type: ["Breakfast","Dinner"] }
  ]);

  const planningData_initial_state = { days: [] };

  const [planningData, setPlanningData] = useState(planningData_initial_state);
  const [mealPlan, setMealPlan] = useState([]);

  //Function to shuffle an array
  function shuffleMeals(meals) {
    const shuffled = [...meals];
    for(let i = shuffled.length -1; i>0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }
  
  //Function to generate random meal plan
  const createMealPlan = ()=> {
    const shuffledMeals = shuffleMeals(mealOptions);
    const mealsForWeek = shuffledMeals.slice(0, planningData.days.length);
    setMealPlan(mealsForWeek);
  }

  // const handleSubmit = (ev) => {
  //   ev.preventDefault();
  // }

  //On button click display respective form
  const [activeForm, setActiveForm] = useState(null);

  const handleClickForm = (formType) => {
    setActiveForm((prevForm) => (prevForm === formType ? null : formType));
  }

  // //function to add a new meal
  // const addMeal = (newMeal)=> {
  //   setMealOptions((prevMeals) => [...prevMeals, newMeal])
  // }
  


  return (
    <div>
      <Header />
      <main>
        <ActionsPanel handleClickForm={handleClickForm}/>
        {activeForm === "addMeal" && <AddMealForm addMeal={addMeal}/>}
        {activeForm === "planWeek" && <PlanWeekForm planningData={planningData} 
        setPlanningData={setPlanningData} 
        createMealPlan={createMealPlan}/>}
        <ResultsSection planningData={planningData} mealPlan={mealPlan}/>  
      </main>
      <Footer />
    </div>
  )
}

export default LandingPage