import { useState } from "react";
import PropTypes from "prop-types";
import "/src/styles/Form.scss";

function AddMealForm({addMeal}) {
  const [mealTitle, setMealTitle] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const mealTypeOptions = ["Breakfast", "Lunch", "Dinner", "Side", "Dessert"];
  const [mealType, setMealType] = useState([]);
  const [mainIngredients, setMainIngredients] = useState([]);
  const [prepTime, setPrepTime] = useState("");
  const [extraInfo, setExtraInfo] = useState("");

  //Handle Meal Type selection
  const handleChangeType = (ev)=> {
    setMealType((prev) => 
      ev.target.checked 
      ? [...prev, ev.target.value] 
      : prev.filter((t) => t !== ev.target.value));
  }

  // Add an empty input field
  const handleAddIngredient = () => {
    if (mainIngredients.length < 3) {
      setMainIngredients([...mainIngredients, ""]); 
    }
  };
  
  //updates mainIngredients value
  const handleChangeIngredient = (index) => (ev) => {
    const updatedIngredients = [...mainIngredients];
    updatedIngredients[index] = ev.target.value;
    setMainIngredients(updatedIngredients);
  };
  
  //Remove ingredient
  const handleRemoveIngredient = (index) => {
    const filteredIngredients = mainIngredients.filter((_, i) => i !== index);
    setMainIngredients(filteredIngredients);
  };

  //Handle Prep-time selection
  const handlePrepTimeChange = (ev) => {
    setPrepTime(ev.target.value);
  };

  //Extra information input
  const handleExtraInfoChange = (ev) => {
    setExtraInfo(ev.target.value);
  };
  
  //Handle meal submission
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
      type: mealType,
      ingredients: mainIngredients,
      prepTime: prepTime,
      extraInfo: extraInfo
    };

    addMeal(newMeal);
  }

  //Renders type of meal checkbox
  const typeSelection = mealTypeOptions.map((type) => (
    <li key={type}>
      <label >
        <input
          type="checkbox"
          value={type}
          onChange={handleChangeType} 
        />
        {" "}{type}
      </label>
    </li> 
  ))

  //Renders ingredients input
  const ingredients = mainIngredients.map((ingredient, index) => (
    <div key={index}>
      <label> 
      Ingredient {index + 1}: 
      <input 
        type="text"
        value={ingredient}
        className="form-text-input"
        onChange={handleChangeIngredient(index)} 
      />
    </label>
    <button type="button" onClick={() => handleRemoveIngredient(index)}>
      X
    </button>
    </div>
  ))

  return (
    <section className="form-container">
      <h2 className="form-title" >Add a meal to your library</h2>
      <form className="form" onSubmit={handleAddMeal}>
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
        <fieldset>
          <legend>Enter up to 3 main ingredients for your meal:</legend>
          {ingredients}
          {mainIngredients.length < 3 && (
            <button type="button" onClick={handleAddIngredient}>
              Add Ingredient
            </button>
          )}
        </fieldset>
        <fieldset>
          <legend id="type-selection-legend">Preparation time</legend>
          <label htmlFor="fast">
            <input 
            type="radio" 
            id="fast" 
            name="prep-time" 
            value="fast"
            checked={prepTime === "fast"}
            onChange={handlePrepTimeChange}
            />{" "}Quick and Easy
          </label>
          <label htmlFor="moderate">
            <input 
            type="radio" 
            id="moderate" 
            name="prep-time" 
            value="moderate"
            checked={prepTime === "moderate"}
            onChange={handlePrepTimeChange}
            />{" "}Moderate
          </label>
          <label htmlFor="long">
            <input 
            type="radio" 
            id="long" 
            name="prep-time" 
            value="long"
            checked={prepTime === "long"}
            onChange={handlePrepTimeChange}/>{" "}Time-Consuming
          </label>
        </fieldset>
        <fieldset>
          <legend>Additional Information</legend>
          <label htmlFor="extra-info">Anything else you want to remember about this meal:</label>
            <textarea 
              id="extra-info"
              name="extra-info"
              rows="4" 
              cols="35"
              value={extraInfo} 
              onChange={handleExtraInfoChange}
            />
        </fieldset>
        
        {errorMsg}
      <button className="form-button" type="submit" onClick={handleAddMeal}> Add Meal</button>
      </form>
    </section>
  )
}

export default AddMealForm;

AddMealForm.propTypes = {
  addMeal: PropTypes.func.isRequired
}