
import NavList from '../mainPage/NavList.jsx';
import PlanTheWeekForm from '../mainPage/PlanTheWeekForm.jsx';
import WeekSchedule from '../mainPage/WeekSchedule.jsx';
import { useState } from 'react';

function Main() {
  const [planTheWeekFormDisplay, setPlanTheWeekFormDisplay] = useState ("hidden");


  return (
    <main>
      <NavList />
      <PlanTheWeekForm planTheWeekFormDisplay= {planTheWeekFormDisplay}/>
      <WeekSchedule />
    </main>
    
  )
}

export default Main