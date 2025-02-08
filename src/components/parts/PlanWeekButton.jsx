import PropTypes from "prop-types";

function PlanWeekButton({handleClickForm}) {

  return (
    <button onClick={() => handleClickForm("planWeek")}>Plan your Week</button>
  )
}

export default PlanWeekButton;

PlanWeekButton.propTypes = {
  handleClickForm: PropTypes.func.isRequired
}