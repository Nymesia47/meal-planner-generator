import DayCard from './elements/DayCard'
import '/src/styles/Day-plan.scss'

function WeekSchedule() {
  return (
    <section className="week">
            <ul className="week-days">
                <DayCard weekDay="Monday" colorBgDay="peach-bg" colorBgBrk="orange-bg" colorBgLunch="blue-bg" colorBgDinner="pink-bg"/>
                <DayCard weekDay="Tuesday" colorBgDay="orange-bg" colorBgBrk="blue-bg" colorBgLunch="pink-bg" colorBgDinner="peach-bg"/>
                <DayCard weekDay="Wednesday" colorBgDay="blue-bg" colorBgBrk="pink-bg" colorBgLunch="peach-bg" colorBgDinner="orange-bg"/>
                <DayCard weekDay="Thursday" colorBgDay="pink-bg" colorBgBrk="peach-bg" colorBgLunch="orange-bg" colorBgDinner="blue-bg"/>
                <DayCard weekDay="Friday" colorBgDay="peach-bg" colorBgBrk="orange-bg" colorBgLunch="blue-bg" colorBgDinner="pink-bg"/>
                <DayCard weekDay="Saturday" colorBgDay="orange-bg" colorBgBrk="blue-bg" colorBgLunch="pink-bg" colorBgDinner="peach-bg"/>
                <DayCard weekDay="Sunday" colorBgDay="blue-bg" colorBgBrk="pink-bg" colorBgLunch="peach-bg" colorBgDinner="orange-bg"/>
            </ul>
            
           <button className="yellow-bg js-btn">Create Meal Plan</button>
    </section>
  )
}

export default WeekSchedule