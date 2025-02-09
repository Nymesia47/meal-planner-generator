import PropTypes from "prop-types";
import "/src/styles/ActionsPanelBtn.scss";

function PlanWeekButton({handleClickForm}) {

  return (
    <button className="actionBtn" onClick={() => handleClickForm("planWeek")}>Plan your Week</button>
  )
}

export default PlanWeekButton;

PlanWeekButton.propTypes = {
  handleClickForm: PropTypes.func.isRequired
}