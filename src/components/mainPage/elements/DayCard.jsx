import DayCardMeal from "./DayCardMeal"

function DayCard({weekDay, colorBgDay, colorBgBrk, colorBgLunch, colorBgDinner, mealOption}) {
  return (
    <li className='dayCard'>
        <h3 className={colorBgDay}>{weekDay}</h3>
        <ul className='dayCard-meals-list'>
            {/* <DayCardMeal title="Breakfast" colorBg={colorBgBrk} />
            <DayCardMeal title="Lunch" colorBg={colorBgLunch} /> */}
            <DayCardMeal title="Dinner" colorBg={colorBgDinner} mealOption={mealOption}/>
        </ul>
    </li>
  )
}

export default DayCard