import '/src/styles/PlanTheWeekForm.scss';
import PropTypes from 'prop-types';

function PlanTheWeekForm({planTheWeekFormDisplay}) {
  return (
    <section className={planTheWeekFormDisplay}>
      <form className="form">
        <fieldset>
          <legend>Select which days of the week you want to plan for: </legend>
          
          <input type="checkbox" id="monday" value="monday" name="monday"/>
          <label htmlFor="monday"> Monday</label>

          <input type="checkbox" id="tuesday" value="tuesday" name="tusday"/>
          <label htmlFor="tuesday"> Tuesday</label>

          <input type="checkbox" id="wednesday" value="wednesday" name="wednesday"/>
          <label htmlFor="wednesday"> Wednesday</label>

          <input type="checkbox" id="thursday" value="thursday" name="thursday"/>
          <label htmlFor="thursday"> Thursday</label>

          <input type="checkbox" id="friday" value="friday" name="friday"/>
          <label htmlFor="friday"> Friday</label>

          <input type="checkbox" id="saturday" value="saturday" name="saturday"/>
          <label htmlFor="saturday"> Saturday</label>

          <input type="checkbox" id="sunday" value="sunday" name="sunday"/>
          <label htmlFor="sunday"> Sunday</label>
          
        </fieldset>
     
      </form>
    </section>
  )
}

PlanTheWeekForm.propTypes = {
  planTheWeekFormDisplay: PropTypes.string
};

export default PlanTheWeekForm