
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav>
                <ul>
                    <Link to="/">Home</Link>
                    <Link to="/Donation">Donation</Link>
                    <Link to="/Blog">Blog</Link>
                    <Link to="/Event">Event</Link>
                </ul>
            </nav>
        </div>
    );
};

export default Header;