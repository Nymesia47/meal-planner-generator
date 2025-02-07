import PropTypes from "prop-types";
import DayCardMealCourse from "./DayCardMealCourse";

function DayCardMeal({title, meal}) {
  return (
    <li>
      <h4>{title}</h4>
      <ul>
        <DayCardMealCourse text="Main: " meal={meal}/>
      </ul>
    </li>
  )
}

export default DayCardMeal;

DayCardMeal.propTypes = {
    title: PropTypes.string.isRequired, 
    meal: PropTypes.string 
  }