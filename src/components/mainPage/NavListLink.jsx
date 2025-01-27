import '/src/styles/NavList.scss';
import PropTypes from 'prop-types';



function NavListLink(props) {
  return (
    <li>
        <a href="">{props.text}</a>
    </li>
  )
};

NavListLink.propTypes = {
    text: PropTypes.string
};

export default NavListLink