
import NavList from '../mainPage/NavList.jsx';
import PlanTheWeekForm from '../mainPage/PlanTheWeekForm.jsx';
import WeekSchedule from '../mainPage/WeekSchedule.jsx';
import { useState } from 'react';

function Main() {
  const [planTheWeekFormDisplay, setPlanTheWeekFormDisplay] = useState ("hidden");
  const planningData_initial_state = {
    days: []
  }
  const [planningData, setPlanningData] = useState(planningData_initial_state);


  return (
    <main>
      <NavList planTheWeekFormDisplay= {planTheWeekFormDisplay} setPlanTheWeekFormDisplay= {setPlanTheWeekFormDisplay}/>
      <PlanTheWeekForm planTheWeekFormDisplay= {planTheWeekFormDisplay} planningData={planningData} setPlanningData={setPlanningData}/>
      <WeekSchedule />
    </main>
    
  )
}

export default Main