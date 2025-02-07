import PropTypes from "prop-types";
import DayCard from "../parts/DayCard";

function ResultSection({planningData}) {

  const weekPlanHTML = planningData.days.map((day) => {
    return (
      <DayCard key={day} weekDay={day.charAt(0).toUpperCase() + day.slice(1)}/>
    )
  });

  return (
    <section>
      <ul>
        {weekPlanHTML}
      </ul>
    </section>
  )
}

export default ResultSection;
ResultSection.propTypes = {
    planningData: PropTypes.object.isRequired, 
}