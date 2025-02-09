import PropTypes from "prop-types";
import "/src/styles/ActionsPanelBtn.scss";

function AddMealButton({handleClickForm}) {
  return (
    <button className="actionBtn" onClick={() => handleClickForm("addMeal")}>Add new meal</button>
  )
}

export default AddMealButton;

AddMealButton.propTypes = {
  handleClickForm: PropTypes.func.isRequired
}