import PropTypes from "prop-types";
import "/src/styles/DayCard.scss";
import DayCardMeal from "./DayCardMeal"

function DayCard({weekDay, meal}) {
  return (
    <li className="dayCard">
        <h3>{weekDay}</h3>
        <ul className='dayCard-meals-list'>
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