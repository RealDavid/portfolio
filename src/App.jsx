import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/home';
import { About } from './pages/about';
import { Contact } from './pages/contact';
import { MovieRanking } from './pages/movie-ranking';
import { BirthdayInvite } from './pages/birthday-invite';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/movieRanking" element={<MovieRanking />} />
                <Route path="/birthdayInvite" element={<BirthdayInvite />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </Router>
    );
}

export default App;
