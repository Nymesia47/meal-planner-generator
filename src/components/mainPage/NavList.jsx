import '/src/styles/NavList.scss';
import NavListLink from "./NavListLink"
import PropTypes from 'prop-types';


function NavList({planTheWeekFormDisplay, setPlanTheWeekFormDisplay}) {
  return (
    <nav >
      <ul className='mainNav'>
        <NavListLink text= "My meals" />
        <NavListLink text= "Add new meal" />
        <NavListLink text= "Plan your week" planTheWeekFormDisplay= {planTheWeekFormDisplay} setPlanTheWeekFormDisplay= {setPlanTheWeekFormDisplay}/>
      </ul>
    </nav>
    
  )
}

NavList.propTypes = {
    planTheWeekFormDisplay: PropTypes.string,
    setPlanTheWeekFormDisplay: PropTypes.func
};



export default NavList