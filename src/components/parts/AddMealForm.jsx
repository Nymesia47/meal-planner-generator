import { useState } from "react";
import PropTypes from "prop-types";

function AddMealForm({handleSubmit, addMeal}) {
  const [mealTitle, setMealTitle] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const mealTypeOptions = ["Breakfast", "Lunch", "Dinner", "Side", "Dessert"];
  const [mealType, setMealType] = useState([]);

  const handleAddMeal = (ev)=> {
    ev.preventDefault();

    if (!mealTitle || mealType.length === 0) {
      setErrorMsg(
        <p className="errorMsg">
          {!mealTitle ? "A meal title is required. " : ""}
          {mealType.length === 0 ? "At least one type must be selected." : ""}
        </p>
      );
      return;
    }


    const newMeal = {
      title: mealTitle,
      plate_id: Date.now(),
      type: mealType
    };

    addMeal(newMeal);
  }

  const handleChangeType = (ev)=> {
    setMealType((prev) => ev.target.checked ? [...prev, ev.target.value] : prev.filter((t) => t !== ev.target.value));
  }

  //Renders type of meal checkbox
  const typeSelection = mealTypeOptions.map((type) => (
    <li key={type}>
      <label >
        <input
          type="checkbox"
          value={type}
          name="type[]"
          onChange={handleChangeType}
          
        />
        {" "}{type}
      </label>
    </li> 
  ))

  return (
    <section>
      <h2 className="form-title" >Add a meal to your library</h2>
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="title">
          Meal:
          <input
            type="text"
            id="title"
            name="title"
            value={mealTitle}
            className="form-text-input"
            onChange={(ev) => setMealTitle(ev.target.value)}
            required
          /> 
        </label>
        <fieldset>
          <legend id="type-selection-legend">Select type of meal:</legend>

          <ul role="group" aria-labelledby="type-selection-legend">
            {typeSelection}
          </ul>
        </fieldset>
        
        {errorMsg}
      <button className="form-button" type="submit" onClick={handleAddMeal}> Add Meal</button>
      </form>
    </section>
  )
}

export default AddMealForm;

AddMealForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  addMeal: PropTypes.func.isRequired
}