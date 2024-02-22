import { Link } from 'react-router-dom';
import '../App';
import './Piano';

function Home() {
    return (
        <div>
            <header>
            <Link to="/piano">Piano</Link>
            </header>
            <h1>
               New Site Coming Soon! 
            </h1>
        </div>
    )
}
export default Home;