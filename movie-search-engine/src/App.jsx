import './App.css'
import MovieCard from './components/MovieCard'

function App() {
  return (
    <div>
      <MovieCard movie={{
        title: "Avengers",
        release_date: "2012"
        }} />

        <MovieCard movie={{
        title: "Avengers",
        release_date: "2012"
        }} />
    </div>
  )
}

export default App
