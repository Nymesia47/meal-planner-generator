
function PlanWeekForm() {
  return (
    <section>
      <h2>Your week requirements</h2>
      <form>
        <fieldset>
          <legend id="days-selection-legend">Select which days of the week you want to plan for:</legend>

          <div role="group" aria-labelledby="days-selection-legend">
            <label>
              <input 
                type="checkbox"
                value="monday"
                name="days[]" 
              />
              Monday
            </label>
          </div>
        </fieldset>
      </form>
    </section>
  )
}

export default PlanWeekForm