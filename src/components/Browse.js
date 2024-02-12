import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import BannerHead from "./BannerHead";
import MoviesList from "./MoviesList";
import { useSelector } from "react-redux";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import GBTSearch from "./GBTSearch";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  const movies = useSelector((store) => store.movies);
  const toggleGbtSearch = useSelector((store) => store.gbt?.showGbtSearch);
  return (
    movies && (
      <div className="w-full">
        <Header />
        {toggleGbtSearch ? (
          <GBTSearch />
        ) : (
          <>
            {movies?.nowPlayingMovies && (
              <BannerHead bannerData={movies?.nowPlayingMovies[0]} />
            )}
            <div className="bg-black">
              <div className="-mt-32">
                {movies.nowPlayingMovies && (
                  <MoviesList
                    title={"Now Playing Movies"}
                    movies={movies.nowPlayingMovies}
                  />
                )}
                {movies.popularMovies && (
                  <MoviesList
                    title={"Popular Movies"}
                    movies={movies.popularMovies}
                  />
                )}
                {movies.topRatedMovies && (
                  <MoviesList
                    title={"Top Rated Movies"}
                    movies={movies.topRatedMovies}
                  />
                )}
                {movies.upcomingMovies && (
                  <MoviesList
                    title={"Upcoming Movies"}
                    movies={movies.upcomingMovies}
                  />
                )}
              </div>
            </div>
          </>
        )}
      </div>
    )
  );
};

export default Browse;
