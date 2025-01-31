// import DayCard from './elements/DayCard'
import '/src/styles/Day-plan.scss'
import DayCardMeal from './elements/DayCardMeal'

function WeekSchedule({planningData, dinnerOptions, mealPlan, setMealPlan}) {

  const weekPlanHTML = planningData.days.map((day, index)=> {
    return (
      <li className='dayCard' key={index}>
        <h3 className="peach-bg">{day.charAt(0).toUpperCase() + day.slice(1)}</h3>
        <ul className='dayCard-meals-list'>
          <DayCardMeal title="Dinner" colorBg={"pink-bg"} mealOption={mealPlan[index]}/>
        </ul>
      </li>);
  });

  function shuffleArray(array) {
    for(let i = array.length -1; i>0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  const handleClickCreate = ()=>{
    const shuffledMeals = shuffleArray([...dinnerOptions]);
    const mealsForWeek = shuffledMeals.slice(0, planningData.days.length);
    setMealPlan(mealsForWeek);
    
  }

   
  return (
    <section className="week">
            <ul className="week-days">
              {weekPlanHTML}
                {/* <DayCard weekDay="Monday" colorBgDay="peach-bg" colorBgBrk="orange-bg" colorBgLunch="blue-bg" colorBgDinner="pink-bg"/>
                <DayCard weekDay="Tuesday" colorBgDay="orange-bg" colorBgBrk="blue-bg" colorBgLunch="pink-bg" colorBgDinner="peach-bg"/>
                <DayCard weekDay="Wednesday" colorBgDay="blue-bg" colorBgBrk="pink-bg" colorBgLunch="peach-bg" colorBgDinner="orange-bg"/>
                <DayCard weekDay="Thursday" colorBgDay="pink-bg" colorBgBrk="peach-bg" colorBgLunch="orange-bg" colorBgDinner="blue-bg"/>
                <DayCard weekDay="Friday" colorBgDay="peach-bg" colorBgBrk="orange-bg" colorBgLunch="blue-bg" colorBgDinner="pink-bg"/>
                <DayCard weekDay="Saturday" colorBgDay="orange-bg" colorBgBrk="blue-bg" colorBgLunch="pink-bg" colorBgDinner="peach-bg"/>
                <DayCard weekDay="Sunday" colorBgDay="blue-bg" colorBgBrk="pink-bg" colorBgLunch="peach-bg" colorBgDinner="orange-bg"/> */}
            </ul>
            
           <button className="yellow-bg js-btn" onClick={handleClickCreate}>Create Meal Plan</button>
    </section>
  )
}

export default WeekSchedule