import '/src/styles/NavList.scss';
import PropTypes from 'prop-types';



function NavListLink({text, setPlanTheWeekFormDisplay}) {

  const handleClick = () => {
    setPlanTheWeekFormDisplay("");
 
  }

  return (
    <li onClick={handleClick}>
      {text}
    </li>
  )
};

NavListLink.propTypes = {
    text: PropTypes.string,
    setPlanTheWeekFormDisplay: PropTypes.func
};

export default NavListLink