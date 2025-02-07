import PropTypes from "prop-types";
import DayCardMealCourse from "./DayCardMealCourse";

function DayCardMeal({title}) {
  return (
    <li>
      <h4>{title}</h4>
      <ul>
        <DayCardMealCourse text="Main: " />
      </ul>
    </li>
  )
}

export default DayCardMeal;

DayCardMeal.propTypes = {
    title: PropTypes.string.isRequired, 
  }