import '../styles/Reset.scss';
import '../styles/App.scss';

function WeekSchedule() {
  return (
    <section className="week">
           <table>
            <caption>Meal Plan for this week</caption>
            <thead>
                <tr>
                    <th scope="col" className="pink-bg"></th>
                    <th scope="col" className="peach-bg">Monday</th>
                    <th scope="col" className="orange-bg">Tuesday</th>
                    <th scope="col" className="blue-bg">Wednesday</th>
                    <th scope="col" className="pink-bg">Thursday</th>
                    <th scope="col" className="peach-bg">Friday</th>
                    <th scope="col" className="orange-bg">Saturday</th>
                    <th scope="col" className="blue-bg">Sunday</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row" className="peach-bg">Breakfast</th>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <th scope="row" className="orange-bg">Lunch</th>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <th scope="row" className="blue-bg">Dinner</th>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </tbody>
            
            
           </table>
           <button className="yellow-bg js-btn">Create Meal Plan</button>
        </section>
  )
}

export default WeekSchedule