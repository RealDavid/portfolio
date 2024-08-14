// import MovieRanking from './MovieRanking'
// import Routes from '../Routes'
import movieRanking from '../assets/images/movie-ranking.png'
import birthdayInvite from '../assets/images/birthday-invite.png'



function App() {
  return (

    // <Routes/>
    <>
       <h1>David's Profile</h1>
        <h2>I'm a Computer Engineer</h2>
        <hr />
        <a href="/MovieRanking">
            <h3>Movie Ranking Project</h3> 
            Movie Ranking Project
             <img
                width="300"
                // src="../assets/images/movie-ranking.png"
                src={movieRanking}
                alt="Movie ranking project preview"
            /> 
         </a>

        <a href="public/birthday-invite.html">
            <h3>Birthday Invite Project</h3>
            <img
                width="300"
                // src="../assets/images/birthday-invite.png"
                src={birthdayInvite}
                alt="Birthday invite project preview"
            />
        </a>

        <hr />
        <a href="public/about.html">About Me</a>
        <a href="public/contact.html">Contact</a>

    </>
  )
}

export default App
