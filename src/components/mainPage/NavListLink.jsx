import '/src/styles/NavList.scss';
import PropTypes from 'prop-types';



function NavListLink(props) {

  const handleClick = (ev) => {
    console.log("I work")
 
  }

  return (
    <li onClick={handleClick}>
      {props.text}
    </li>
  )
};

NavListLink.propTypes = {
    text: PropTypes.string
};

export default NavListLink