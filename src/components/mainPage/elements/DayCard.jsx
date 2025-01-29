import DayCardMeal from "./DayCardMeal"

function DayCard({weekDay, colorBgDay, colorBgBrk, colorBgLunch, colorBgDinner}) {
  return (
    <li className='dayCard'>
        <h3 className={colorBgDay}>{weekDay}</h3>
        <ul className='dayCard-meals-list'>
            <DayCardMeal title="Breakfast" colorBg={colorBgBrk} />
            <DayCardMeal title="Lunch" colorBg={colorBgLunch} />
            <DayCardMeal title="Dinner" colorBg={colorBgDinner} />
        </ul>
    </li>
  )
}

export default DayCard