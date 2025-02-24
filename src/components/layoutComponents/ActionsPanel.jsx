import PlanWeekButton from "../parts/PlanWeekButton";
import AddMealButton from "../parts/AddMealButton";
import PropTypes from "prop-types";
import "/src/styles/ActionsPanel.scss";
import GoToMealsBtn from "../parts/GoToMealsBtn";

function ActionsPanel({handleClickForm}) {
  return (
    <section className="actions-panel">
      <GoToMealsBtn />
      <AddMealButton handleClickForm={handleClickForm}/>
      <PlanWeekButton handleClickForm={handleClickForm}/>
    </section>
  )
}

export default ActionsPanel;

ActionsPanel.propTypes = {
  handleClickForm: PropTypes.func.isRequired,
}