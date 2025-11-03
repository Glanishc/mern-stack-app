import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
    return (
        <div className='navbar'>
            <ul>
                <Link to="/"><img className='logo' src="Untitled-1.png" /></Link>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
                <li><Link to='/login'>Login</Link></li>
            </ul>
        </div>
    )
}
export default Navbar