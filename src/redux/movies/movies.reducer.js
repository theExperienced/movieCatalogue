import MovieActionTypes from "./movies.types";

export const movieReducer = (state = {}, action) => {
    switch (action.type) {
        case MovieActionTypes.FETCH_RANDOM_MOVIE:
            return { ...state, randomMovie: action.payload };
  
        case MovieActionTypes.FETCH_BEST_MOVIES:
            return { ...state, bestMovies: action.payload };
        
        case MovieActionTypes.FETCH_BY_CRITERIA:
            console.log("MOVIES BY CRITERIA REDUCER", action);
            const { movies, total_pages, isNewQuery } = action.payload;

            if (state.moviesByCriteria && !isNewQuery) {
                return {
                    ...state,
                    moviesByCriteria: {
                    totalPages: total_pages,
                    movies: [
                        ...state.moviesByGenre.movies,
                        movies
                    ]
                    }
                };
            }
            
            return {
                ...state,
                moviesByCriteria: {
                    totalPages: total_pages,
                    movies: movies
                }
            };

        case MovieActionTypes.FETCH_MOVIES_BY_GENRE:
              // debugger;
  
            if (state.moviesByGenre && !action.isNewQuery) {
            console.log("INDEED MOVIES BY GENRE EXIST IN STATE", action.payload);
            return {
                ...state,
                moviesByGenre: {
                totalPages: action.movies.total_pages,
                movies: [
                    ...state.moviesByGenre.movies,
                    ...action.movies.results
                ]
                }
            }; //needs fixing!!!@%^&$*^&
            }
            
            return {
            ...state,
            moviesByGenre: {
                totalPages: action.movies.total_pages,
                movies: action.movies.results
            }
            };
  
        default:
            return state;
    }
};