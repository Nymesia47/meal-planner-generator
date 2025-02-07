import PropTypes from "prop-types";
import DayCardMeal from "./DayCardMeal"

function DayCard({weekDay, meal}) {
  return (
    <li>
        <h3>{weekDay}</h3>
        <ul>
            <DayCardMeal title="Dinner" meal={meal ? meal.title : ""}/>
        </ul>
    </li>
  )
}

export default DayCard;

DayCard.propTypes = {
    weekDay: PropTypes.string.isRequired,
    meal: PropTypes.object
}