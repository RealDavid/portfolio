import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import App from './App';
import MovieRanking from './pages/movie-ranking';

function Routes() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<App />} />
                    <Route path="/movieranking" element={<MovieRanking />} />
                </Routes>
            </Router>
        </>
    );
}

export default Routes;
