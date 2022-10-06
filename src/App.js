import "./App.css"
import {useEffect, useState} from "react";
import Movie from "./components/Movie";

// const movieApi = 'https://imdb-api.com/en/API/SearchMovie/k_fm1t0alf/inception 2010'
const movieApi = ''
// const movieTop = 'https://imdb-api.com/en/API/Top250Movies/k_fm1t0alf'

function App() {
	const movies = [1, 2, 3]
	const [movie, setMovie] = useState([])
	// const [term, setTerm] = useState('')

	const onHandleTerm = (e) => {
		setTerm(e.target.value)
	}

	useEffect(() => {
		fetch(movieApi)
			.then(res => res.json())
			.then(res => setMovie(res.result))
	}, [])

	const onHandleSearch = () => {
		fetch(movieApi)
			.then(res => res.json())
			.then(res => setMovie(res.results))
	}

	return (
		<>
			<header>
				<input type="text" placeholder="Найти..." value={term} onChange={onHandleSearch}/>
			</header>

			<div className="movies">
				{movie.map((elem, i) => <Movie key={i}/>)}
			</div>
		</>
	);
}

export default App;
