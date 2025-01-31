import DayCardMealCourse from "./DayCardMealCourse"


function DayCardMeal({title, colorBg, mealOption}) {
  return (
    <li className={`dayCard-meals-list-item ${colorBg}`}>
      <h4>{title}</h4>
      <ul>
        <DayCardMealCourse text="Main: " mealOption={mealOption} />
        {/* <DayCardMealCourse text="Side" />
        <DayCardMealCourse text="Dessert" /> */}
      </ul>
    </li>
  )
}

export default DayCardMeal