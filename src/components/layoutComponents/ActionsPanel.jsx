import PlanWeekButton from "../parts/PlanWeekButton";
import PlanWeekForm from "../parts/PlanWeekForm";
import PropTypes from "prop-types";

function ActionsPanel({planningData, setPlanningData, createMealPlan}) {
  return (
    <section>
      <PlanWeekButton />
      <PlanWeekForm planningData={planningData} 
      setPlanningData={setPlanningData} 
      createMealPlan={createMealPlan}/>
    </section>
  )
}

export default ActionsPanel;

ActionsPanel.propTypes = {
  planningData: PropTypes.object.isRequired, 
  setPlanningData: PropTypes.func.isRequired,
  createMealPlan: PropTypes.func.isRequired
}