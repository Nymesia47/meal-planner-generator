import { useState } from "react";
import PropTypes from "prop-types";

function AddMealForm({handleSubmit, addMeal}) {
  const [mealTitle, setMealTitle] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleAddMeal = ()=> {

    if (!mealTitle) {
      setErrorMsg(<p>A meal title is required</p>);
    }

    const newMeal = {
      title: mealTitle,
      plate_id: Date.now()
    }

    {addMeal(newMeal)};
  }

  return (
    <section>
      <h2>Add a meal to your library</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Meal:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={mealTitle}
          onChange={(ev) => setMealTitle(ev.target.value)}
          required
        />
        {errorMsg}
      <button type="submit" onClick={handleAddMeal}> Add Meal</button>
      </form>
    </section>
  )
}

export default AddMealForm;

AddMealForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  addMeal: PropTypes.func.isRequired
}