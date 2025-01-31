
import NavList from '../mainPage/NavList.jsx';
import PlanTheWeekForm from '../mainPage/PlanTheWeekForm.jsx';
import WeekSchedule from '../mainPage/WeekSchedule.jsx';
import { useState } from 'react';

function Main() {
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
  ])
  const [planTheWeekFormDisplay, setPlanTheWeekFormDisplay] = useState ("hidden");
  const planningData_initial_state = {
    days: []
  }
  
  const [planningData, setPlanningData] = useState(planningData_initial_state);

  const dayOrder = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];

  const sortedDays = planningData.days.sort((a, b) => {
    return dayOrder.indexOf(a) - dayOrder.indexOf(b);
  });

  const sortedPlanningData = { ...planningData, days: sortedDays };

  const [mealPlan, setMealPlan] = useState([]);


  return (
    <main>
      <NavList planTheWeekFormDisplay= {planTheWeekFormDisplay} setPlanTheWeekFormDisplay= {setPlanTheWeekFormDisplay}/>
      <PlanTheWeekForm planTheWeekFormDisplay= {planTheWeekFormDisplay} planningData={planningData} setPlanningData={setPlanningData}/>
      <WeekSchedule planningData={sortedPlanningData} dinnerOptions={dinnerOptions} mealPlan={mealPlan} setMealPlan={setMealPlan}/>
    </main>
    
  )
}

export default Main