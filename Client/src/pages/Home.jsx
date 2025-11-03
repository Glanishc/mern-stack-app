import './Home.css'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <>
    <div className="content">
        <h1>WEKFEST</h1>
        <p>Experience <b>Japan's</b> <img src='Japan.png' width={20}/> finest curated car culture at Wekfest,<br /> where craftsmanship meets creativity in a celebration of automotive excellence.</p>
            <div>
            <Link to="/login"><button type="button"> <span className="lspan"></span> LOGIN</button></Link>
            <Link to="/register"><button type="button"> <span className="rspan"></span>  REGISTER </button></Link>
        </div>
    </div>
        </>
    )
}

export default Home