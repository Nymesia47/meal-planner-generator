import PlanWeekButton from "../parts/PlanWeekButton";
import PlanWeekForm from "../parts/PlanWeekForm";
import PropTypes from "prop-types";

function ActionsPanel({planningData, setPlanningData}) {
  return (
    <section>
      <PlanWeekButton />
      <PlanWeekForm planningData={planningData} setPlanningData={setPlanningData}/>
    </section>
  )
}

export default ActionsPanel;

ActionsPanel.propTypes = {
  planningData: PropTypes.object.isRequired, 
  setPlanningData: PropTypes.func.isRequired
}