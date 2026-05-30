import './Navigation.css';
import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <nav className="Navigation">
            <ul>
                <li>
                    <nav>
                        <Link to="/login">Log In</Link>
                    </nav>
                </li>
                <li>
                    <nav>
                        <Link to="/signup">Sign Up</Link>
                    </nav>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;
