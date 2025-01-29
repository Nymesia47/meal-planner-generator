import DayCardMealCourse from "./DayCardMealCourse"


function DayCardMeal({title, colorBg}) {
  return (
    <li className={`dayCard-meals-list-item ${colorBg}`}>
      <h4>{title}</h4>
      <ul>
        <DayCardMealCourse text="Main" />
        <DayCardMealCourse text="Side" />
        <DayCardMealCourse text="Dessert" />
      </ul>
    </li>
  )
}

export default DayCardMeal