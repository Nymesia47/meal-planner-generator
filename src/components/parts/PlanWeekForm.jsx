import PropTypes from "prop-types";
import CreateMealPlanbtn from "./CreateMealPlanbtn";

function PlanWeekForm({planningData, setPlanningData}) {

  //Adds the selected days in the Planning Data
  const dayOrder = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];

  const handleDaySelection = (ev) => {
    const {value, checked} = ev.target;

    setPlanningData((prevPlanningData) => {
      let updatedDays;

      if (checked) {
        updatedDays= [...prevPlanningData.days, value];
      } else {
        updatedDays= prevPlanningData.days.filter((day) => day !== value);
      };

      updatedDays.sort((a, b) => {
        return dayOrder.indexOf(a) - dayOrder.indexOf(b);
      }); 

      return { ...prevPlanningData, days: updatedDays };
    });
  };
  
  //Prevents the refreshing of the page on submit
  const handleSubmit = (ev) => {
    ev.preventDefault();
  }

  //Renders the days to select in the form
  const daysSelection = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"].map((day) => (
    <label key={day}>
      <input
        type="checkbox"
        value={day}
        name="days[]"
        onChange={handleDaySelection}
        checked={planningData.days.includes(day)}
      />
      {day.charAt(0).toUpperCase() + day.slice(1)}
    </label>
  ))

  return (
    <section>
      <h2>Your week requirements</h2>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend id="days-selection-legend">Select which days of the week you want to plan for:</legend>

          <div role="group" aria-labelledby="days-selection-legend">
            {daysSelection}
          </div>
        </fieldset>
        <CreateMealPlanbtn/>
      </form>
    </section>
  )
}

export default PlanWeekForm;

PlanWeekForm.propTypes = {
  planningData: PropTypes.object.isRequired, 
  setPlanningData: PropTypes.func.isRequired
}