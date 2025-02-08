import PropTypes from "prop-types";

function AddMealButton({handleClickForm}) {
  return (
    <button onClick={() => handleClickForm("addMeal")}>Add new meal</button>
  )
}

export default AddMealButton;

AddMealButton.propTypes = {
  handleClickForm: PropTypes.func.isRequired
}