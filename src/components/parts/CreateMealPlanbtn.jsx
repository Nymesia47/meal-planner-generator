import PropTypes from "prop-types";

function CreateMealPlanbtn({createMealPlan}) {
  const handleClickCreate = ()=> {
    createMealPlan()
  }

  return (
    <button type="submit" onClick={handleClickCreate}>Create Meal Plan</button>
  )
}

export default CreateMealPlanbtn;

CreateMealPlanbtn.propTypes = {
  createMealPlan: PropTypes.func.isRequired
}