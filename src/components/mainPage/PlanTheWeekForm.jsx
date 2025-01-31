import '/src/styles/PlanTheWeekForm.scss';
import PropTypes from 'prop-types';

function PlanTheWeekForm({planTheWeekFormDisplay, planningData, setPlanningData}) {

  const handleCheckbox = (ev) => {
    const checked = ev.target.checked;
    const value = ev.target.value;

    if(checked) {
      setPlanningData({...planningData, days: [...planningData.days, value]})
    } else {
      const cloneArray = [...planningData.days];
      const position = cloneArray.indexOf(value);
      cloneArray.splice(position, 1);
      setPlanningData({...planningData, days: cloneArray})
    }

  }

  return (
    <section className={planTheWeekFormDisplay}>
      <form className="form">
        <fieldset>
          <legend>Select which days of the week you want to plan for: </legend>
          
          <input type="checkbox" id="monday" value="monday" name="monday" onChange={handleCheckbox} checked={planningData.days.includes("monday")}/>
          <label htmlFor="monday"> Monday</label>

          <input type="checkbox" id="tuesday" value="tuesday" name="tuesday" onChange={handleCheckbox} checked={planningData.days.includes("tuesday")}/>
          <label htmlFor="tuesday"> Tuesday</label>

          <input type="checkbox" id="wednesday" value="wednesday" name="wednesday" onChange={handleCheckbox} checked={planningData.days.includes("wednesday")}/>
          <label htmlFor="wednesday"> Wednesday</label>

          <input type="checkbox" id="thursday" value="thursday" name="thursday" onChange={handleCheckbox} checked={planningData.days.includes("thursday")}/>
          <label htmlFor="thursday"> Thursday</label>

          <input type="checkbox" id="friday" value="friday" name="friday" onChange={handleCheckbox} checked={planningData.days.includes("friday")}/>
          <label htmlFor="friday"> Friday</label>

          <input type="checkbox" id="saturday" value="saturday" name="saturday" onChange={handleCheckbox} checked={planningData.days.includes("saturday")}/>
          <label htmlFor="saturday"> Saturday</label>

          <input type="checkbox" id="sunday" value="sunday" name="sunday" onChange={handleCheckbox} checked={planningData.days.includes("sunday")}/>
          <label htmlFor="sunday"> Sunday</label>
          
        </fieldset>
     
      </form>
    </section>
  )
}

PlanTheWeekForm.propTypes = {
  planTheWeekFormDisplay: PropTypes.string,
  planningData: PropTypes.object,
  setPlanningData: PropTypes.func
};

export default PlanTheWeekForm