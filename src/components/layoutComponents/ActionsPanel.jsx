import PlanWeekButton from "../parts/PlanWeekButton";
import PropTypes from "prop-types";

function ActionsPanel({handleClickForm}) {
  return (
    <section>
      <PlanWeekButton handleClickForm={handleClickForm}/>
    </section>
  )
}

export default ActionsPanel;

ActionsPanel.propTypes = {
  handleClickForm: PropTypes.func.isRequired
}