import PropTypes from "prop-types";

 function DayCardMealCourse({text}) {
    return (
      <li>{text}</li>
    )
  }
  
  export default DayCardMealCourse;

  DayCardMealCourse.propTypes = {
    text: PropTypes.string.isRequired, 
  }