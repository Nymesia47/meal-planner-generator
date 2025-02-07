import PropTypes from "prop-types";
import CreateMealPlanbtn from "./CreateMealPlanbtn";

function PlanWeekForm({planningData, setPlanningData, createMealPlan}) {

  //Adds the selected days in the Planning Data
  const daysOfWeek = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];

  const handleDaySelection = (ev) => {
    const {value, checked} = ev.target;

    setPlanningData((prevPlanningData) => {
      let updatedDays;

      if (checked) {
        updatedDays= [...prevPlanningData.days, value];
      } else {
        updatedDays= prevPlanningData.days.filter((day) => day !== value);
      };

      const sortedDays = [...updatedDays].sort((a, b) => {
        return daysOfWeek.indexOf(a) - daysOfWeek.indexOf(b);
      }); 

      return { ...prevPlanningData, days: sortedDays };
    });
  };
  
  //Prevents the refreshing of the page on submit
  const handleSubmit = (ev) => {
    ev.preventDefault();
  }

  //Renders the days to select in the form
  const daysSelection = daysOfWeek.map((day) => (
    <li key={day}>
      <label >
        <input
          type="checkbox"
          value={day}
          name="days[]"
          onChange={handleDaySelection}
          checked={planningData.days.includes(day)}
        />
        {day.charAt(0).toUpperCase() + day.slice(1)}
      </label>
    </li> 
  ))

  return (
    <section>
      <h2>Your week requirements</h2>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend id="days-selection-legend">Select which days of the week you want to plan for:</legend>

          <ul role="group" aria-labelledby="days-selection-legend">
            {daysSelection}
          </ul>
        </fieldset>
        <CreateMealPlanbtn createMealPlan={createMealPlan}/>
      </form>
    </section>
  )
}

export default PlanWeekForm;

PlanWeekForm.propTypes = {
  planningData: PropTypes.object.isRequired, 
  setPlanningData: PropTypes.func.isRequired,
  createMealPlan: PropTypes.func.isRequired
}