import PlanWeekButton from "../parts/PlanWeekButton";
import AddMealButton from "../parts/AddMealButton";
import PropTypes from "prop-types";

function ActionsPanel({handleClickForm}) {
  return (
    <section>
      <AddMealButton handleClickForm={handleClickForm}/>
      <PlanWeekButton handleClickForm={handleClickForm}/>
    </section>
  )
}

export default ActionsPanel;

ActionsPanel.propTypes = {
  handleClickForm: PropTypes.func.isRequired
}