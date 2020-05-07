import MovieActionTypes from "./movies.types";





                                                                    //REMEMBER TO EXTRACT ONLY NESSECARY VALUES FROM FETCHED MOVIES
                                                                    //I.E. TITLE, YEAR ETC......





export const movieReducer = (state = {}, action) => {
    const { id, page, movies, totalPages, isNewQuery } = action.payload || {};

    switch (action.type) {
        case MovieActionTypes.FETCH_RANDOM_MOVIE:
            return { ...state, randomMovie: action.payload };
  
        case MovieActionTypes.FETCH_BEST_MOVIES:
            if (state.bestMovies) {
                return { 
                    ...state, 
                    bestMovies: {
                        page,
                        movies: [...state.bestMovies.movies, ...movies],
                        totalPages
                    }
                };
            }
            return { 
                ...state, 
                bestMovies: {
                    page,
                    movies,
                    totalPages
                }
            };
        
        case MovieActionTypes.FETCH_BY_CRITERIA:
            // const { movies, total_pages, isNewQuery } = action.payload;

            if (state.moviesByCriteria && !isNewQuery) {
                return {
                    ...state,
                    moviesByCriteria: {
                        totalPages,
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
                    totalPages,
                    movies
                }
            };

        case MovieActionTypes.FETCH_MOVIES_BY_GENRE:
              // debugger;
  

            if (id in state.moviesByGenre) {
                return {
                    ...state,
                    moviesByGenre: {
                        ...state.moviesByGenre,
                        [id]:  {
                            movies: [ ...state.moviesByGenre[id].movies, ...movies ],             
                            page,
                            totalPages
                        }
                    }
                };
            }

            return {
                ...state,
                moviesByGenre: {
                    ...state.moviesByGenre,
                    [id]:  {
                        movies: [ ...movies ],             
                        page,
                        totalPages: totalPages
                    }
                }
            };
            
            
            // return {
            //     ...state,
            //     moviesByGenre: {
            //         totalPages: action.movies.total_pages,
            //         movies: action.movies.results
            //     }
            // };
  
        default:
            return state;
    }
};