
import "/src/styles/ActionsPanelBtn.scss";
import { useNavigate } from "react-router-dom";

function GoToMealsBtn() {
    const navigate = useNavigate();
    
    return (
    <button className="actionBtn" onClick={() => navigate("/meals")}>View my meals</button>
  )
}

export default GoToMealsBtn;
