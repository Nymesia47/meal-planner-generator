import Header from "../layoutComponents/Header";
import Footer from "../layoutComponents/Footer";
import ActionsPanel from "../layoutComponents/ActionsPanel";
import ResultsSection from "../layoutComponents/ResultSection";
import { useState } from "react";
import PlanWeekForm from "../parts/PlanWeekForm";
import AddMealForm from "../parts/AddMealForm";

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
  const [mealPlan, setMealPlan] = useState([]);

  //Function to shuffle an array
  function shuffleMeals(meals) {
    const shuffled = [...meals];
    for(let i = shuffled.length -1; i>0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [meals[i], meals[j]] = [meals[j], meals[i]];
    }
    return shuffled;
  }
  
  //Function to generate random meal plan
  const createMealPlan = ()=> {
    const shuffledMeals = shuffleMeals(dinnerOptions);
    const mealsForWeek = shuffledMeals.slice(0, planningData.days.length);
    setMealPlan(mealsForWeek);
  }

  const handleSubmit = (ev) => {
    ev.preventDefault();
  }

  //On button click display respective form
  const [activeForm, setActiveForm] = useState(null);

  const handleClickForm = (formType) => {
    setActiveForm((prevForm) => (prevForm === formType ? null : formType));
  }

  //function to add a new meal
  const addMeal = (newMeal)=> {
    setDinnerOptions((prevMeals) => [...prevMeals, newMeal])


  }
  


  return (
    <div>
      <Header />
      <main>
        <ActionsPanel handleClickForm={handleClickForm}/>
        {activeForm === "addMeal" && <AddMealForm handleSubmit={handleSubmit} addMeal={addMeal}/>}
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