import '/src/styles/NavList.scss';
import NavListLink from "./NavListLink"


function NavList() {
  return (
    <nav >
      <ul className='mainNav'>
        <NavListLink text= "My meals" />
        <NavListLink text= "Add new meal" />
        <NavListLink text= "Plan your week" />
      </ul>
    </nav>
    
  )
}

export default NavList