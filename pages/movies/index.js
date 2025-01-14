import { useEffect, useState } from "react";
import Link from "next/link";
import { TMDB_API_BASE_URL, TMDB_API_KEY } from "@/keys/tmdbKey";

const PopularPage = () => {
	const [popularMovies, setPopularMovies] = useState([]);

	useEffect(() => {
		const fetchPopularMovies = async () => {
			const res = await fetch(
				`${TMDB_API_BASE_URL}/movie/popular?api_key=${TMDB_API_KEY}`
			);
			const data = await res.json();
            console.log(data)
			setPopularMovies(data.results);
		};

		fetchPopularMovies();
	}, []);

	return (
		<div className="font container mt-5">
			<h1 className="text-center mb-4">Popular Movies</h1>
			<div className="row">
				{popularMovies.map((movie) => (
					<div className="col-md-4 col-lg-3 mb-4" key={movie.id}>
						<div className="card h-100">
							<img
								src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
								className="card-img-top"
								alt={movie.title}
							/>
							<div className="card-body">
								<h5 className="card-title">{movie.title}</h5>
								
								<Link
									className="btn btn-primary w-100"
									href={`/movies/${movie.id}`}
								>
									View Details
								</Link>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default PopularPage;
