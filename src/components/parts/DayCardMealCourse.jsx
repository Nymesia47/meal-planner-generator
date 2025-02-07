import PropTypes from "prop-types";

 function DayCardMealCourse({text, meal}) {
    return (
      <li>
        <p><span>{text}</span>{meal}</p>
      </li>
    )
  }
  
  export default DayCardMealCourse;

  DayCardMealCourse.propTypes = {
    text: PropTypes.string.isRequired,
    meal: PropTypes.string 
  }