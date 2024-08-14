import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import App from './components/App'
import MovieRanking from './components/MovieRanking'

function Routes() {
    return<>
    <Router>
        <Routes>
            <Route path='/' element={<App />}/>        
            <Route path='/movieranking' element={<MovieRanking />}/>  
        </Routes>
    </Router>
    </>
}

export default Routes