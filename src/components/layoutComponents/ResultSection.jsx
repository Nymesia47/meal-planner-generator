import PropTypes from "prop-types";
import "/src/styles/ResultSection.scss";
import DayCard from "../parts/DayCard";
import { useEffect } from "react";

function ResultSection({planningData, mealPlan}) {

  useEffect(() => {
    console.log("Updated mealPlan in ResultSection:", mealPlan);
  }, [mealPlan]);

  const weekPlanHTML = planningData.days.map((day, index) => {
    const meal = mealPlan[index];

    return (
      <DayCard key={day} 
      weekDay={day.charAt(0).toUpperCase() + day.slice(1)}
      meal={meal}
      />
    )
  });

  return (
    <section>
      <ul className="dayCardList">
        {weekPlanHTML}
      </ul>
    </section>
  )
}

export default ResultSection;
ResultSection.propTypes = {
    planningData: PropTypes.object.isRequired, 
    mealPlan: PropTypes.array
}