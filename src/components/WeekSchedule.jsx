import '../styles/Reset.scss';
import '../styles/Day-plan.scss';

function WeekSchedule() {
  return (
    <section className="week">
            <ul className="week-days">
                <li className='dayCard'>
                    <h3 className="peach-bg">Monday</h3>
                    <ul className='dayCard-meals-list'>
                        <li className="dayCard-meals-list-item hidden orange-bg">
                            <h4>Breakfast</h4>
                            <ul>
                                <li className='dayCard-meals-list-item_option lavenderblush-bg'>Main</li>
                            </ul>
                        </li>
                        <li className="dayCard-meals-list-item hidden blue-bg">
                        <h4>Lunch</h4>
                            <ul>
                                <li className='dayCard-meals-list-item_option lavenderblush-bg'>Main</li>
                                <li className='dayCard-meals-list-item_option lavenderblush-bg hidden'>Side</li>
                                <li className='dayCard-meals-list-item_option lavenderblush-bg hidden'>Dessert</li>
                            </ul>
                        </li>
                        <li className="dayCard-meals-list-item pink-bg">
                            <h4>Dinner</h4>
                            <ul>
                                <li className='dayCard-meals-list-item_option lavenderblush-bg'>Main</li>
                                <li className='dayCard-meals-list-item_option lavenderblush-bg hidden'>Side</li>
                                <li className='dayCard-meals-list-item_option lavenderblush-bg hidden'>Dessert</li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li className='dayCard'>
                    <h3 className="orange-bg">Tuesday</h3>
                    <ul className='dayCard-meals-list'>
                        <li className="dayCard-meals-list-item hidden blue-bg">
                            <h4>Breakfast</h4>
                            <ul>
                                <li className='dayCard-meals-list-item_option lavenderblush-bg'>Main</li>
                            </ul>
                        </li>
                        <li className="dayCard-meals-list-item hidden pink-bg">
                        <h4>Lunch</h4>
                            <ul>
                                <li className='dayCard-meals-list-item_option lavenderblush-bg'>Main</li>
                                <li className='dayCard-meals-list-item_option lavenderblush-bg hidden'>Side</li>
                                <li className='dayCard-meals-list-item_option lavenderblush-bg hidden'>Dessert</li>
                            </ul>
                        </li>
                        <li className="dayCard-meals-list-item peach-bg">
                            <h4>Dinner</h4>
                            <ul>
                                <li className='dayCard-meals-list-item_option lavenderblush-bg'>Main</li>
                                <li className='dayCard-meals-list-item_option lavenderblush-bg hidden'>Side</li>
                                <li className='dayCard-meals-list-item_option lavenderblush-bg hidden'>Dessert</li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li className='dayCard'>
                    <h3 className="blue-bg">Wednesday</h3>
                    <ul className='dayCard-meals-list'>
                        <li className="dayCard-meals-list-item hidden pink-bg">
                            <h4>Breakfast</h4>
                            <ul>
                                <li className='dayCard-meals-list-item_option lavenderblush-bg'>Main</li>
                            </ul>
                        </li>
                        <li className="dayCard-meals-list-item hidden peach-bg">
                        <h4>Lunch</h4>
                            <ul>
                                <li className='dayCard-meals-list-item_option lavenderblush-bg'>Main</li>
                                <li className='dayCard-meals-list-item_option lavenderblush-bg hidden'>Side</li>
                                <li className='dayCard-meals-list-item_option lavenderblush-bg hidden'>Dessert</li>
                            </ul>
                        </li>
                        <li className="dayCard-meals-list-item orange-bg">
                            <h4>Dinner</h4>
                            <ul>
                                <li className='dayCard-meals-list-item_option lavenderblush-bg'>Main</li>
                                <li className='dayCard-meals-list-item_option lavenderblush-bg hidden'>Side</li>
                                <li className='dayCard-meals-list-item_option lavenderblush-bg hidden'>Dessert</li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li className='dayCard'>
                    <h3 className="pink-bg">Thursday</h3>
                    <ul className='dayCard-meals-list'>
                        <li className="dayCard-meals-list-item hidden peach-bg">
                            <h4>Breakfast</h4>
                            <ul>
                                <li className='dayCard-meals-list-item_option lavenderblush-bg'>Main</li>
                            </ul>
                        </li>
                        <li className="dayCard-meals-list-item hidden orange-bg">
                        <h4>Lunch</h4>
                            <ul>
                                <li className='dayCard-meals-list-item_option lavenderblush-bg'>Main</li>
                                <li className='dayCard-meals-list-item_option lavenderblush-bg hidden'>Side</li>
                                <li className='dayCard-meals-list-item_option lavenderblush-bg hidden'>Dessert</li>
                            </ul>
                        </li>
                        <li className="dayCard-meals-list-item blue-bg">
                            <h4>Dinner</h4>
                            <ul>
                                <li className='dayCard-meals-list-item_option lavenderblush-bg'>Main</li>
                                <li className='dayCard-meals-list-item_option lavenderblush-bg hidden'>Side</li>
                                <li className='dayCard-meals-list-item_option lavenderblush-bg hidden'>Dessert</li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li className='dayCard'>
                    <h3 className="peach-bg">Friday</h3>
                    <ul className='dayCard-meals-list'>
                        <li className="dayCard-meals-list-item hidden orange-bg">
                            <h4>Breakfast</h4>
                            <ul>
                                <li className='dayCard-meals-list-item_option lavenderblush-bg'>Main</li>
                            </ul>
                        </li>
                        <li className="dayCard-meals-list-item hidden blue-bg">
                        <h4>Lunch</h4>
                            <ul>
                                <li className='dayCard-meals-list-item_option lavenderblush-bg'>Main</li>
                                <li className='dayCard-meals-list-item_option lavenderblush-bg hidden'>Side</li>
                                <li className='dayCard-meals-list-item_option lavenderblush-bg hidden'>Dessert</li>
                            </ul>
                        </li>
                        <li className="dayCard-meals-list-item pink-bg">
                            <h4>Dinner</h4>
                            <ul>
                                <li className='dayCard-meals-list-item_option lavenderblush-bg'>Main</li>
                                <li className='dayCard-meals-list-item_option lavenderblush-bg hidden'>Side</li>
                                <li className='dayCard-meals-list-item_option lavenderblush-bg hidden'>Dessert</li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li className='dayCard'>
                    <h3 className="orange-bg">Saturday</h3>
                    <ul className='dayCard-meals-list'>
                        <li className="dayCard-meals-list-item hidden blue-bg">
                            <h4>Breakfast</h4>
                            <ul>
                                <li className='dayCard-meals-list-item_option lavenderblush-bg'>Main</li>
                            </ul>
                        </li>
                        <li className="dayCard-meals-list-item hidden pink-bg">
                        <h4>Lunch</h4>
                            <ul>
                                <li className='dayCard-meals-list-item_option lavenderblush-bg'>Main</li>
                                <li className='dayCard-meals-list-item_option lavenderblush-bg hidden'>Side</li>
                                <li className='dayCard-meals-list-item_option lavenderblush-bg hidden'>Dessert</li>
                            </ul>
                        </li>
                        <li className="dayCard-meals-list-item peach-bg">
                            <h4>Dinner</h4>
                            <ul>
                                <li className='dayCard-meals-list-item_option lavenderblush-bg'>Main</li>
                                <li className='dayCard-meals-list-item_option lavenderblush-bg hidden'>Side</li>
                                <li className='dayCard-meals-list-item_option lavenderblush-bg hidden'>Dessert</li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li className='dayCard'>
                    <h3 className="blue-bg">Sunday</h3>
                    <ul className='dayCard-meals-list'>
                        <li className="dayCard-meals-list-item hidden pink-bg">
                            <h4>Breakfast</h4>
                            <ul>
                                <li className='dayCard-meals-list-item_option lavenderblush-bg'>Main</li>
                            </ul>
                        </li>
                        <li className="dayCard-meals-list-item hidden peach-bg">
                        <h4>Lunch</h4>
                            <ul>
                                <li className='dayCard-meals-list-item_option lavenderblush-bg'>Main</li>
                                <li className='dayCard-meals-list-item_option lavenderblush-bg hidden'>Side</li>
                                <li className='dayCard-meals-list-item_option lavenderblush-bg hidden'>Dessert</li>
                            </ul>
                        </li>
                        <li className="dayCard-meals-list-item orange-bg">
                            <h4>Dinner</h4>
                            <ul>
                                <li className='dayCard-meals-list-item_option lavenderblush-bg'>Main</li>
                                <li className='dayCard-meals-list-item_option lavenderblush-bg hidden'>Side</li>
                                <li className='dayCard-meals-list-item_option lavenderblush-bg hidden'>Dessert</li>
                            </ul>
                        </li>
                    </ul>
                </li>
                
            </ul>
            
           <button className="yellow-bg js-btn">Create Meal Plan</button>
        </section>
  )
}

export default WeekSchedule