import PropTypes from "prop-types";
import DayCardMeal from "./DayCardMeal"

function DayCard({weekDay}) {
  return (
    <li>
        <h3>{weekDay}</h3>
        <ul>
            <DayCardMeal title="Dinner"/>
        </ul>
    </li>
  )
}

export default DayCard;

DayCard.propTypes = {
    weekDay: PropTypes.string.isRequired, 
}