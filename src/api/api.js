import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    auth: {
        'api_key': '55881c34587ea582a685d26399d1be47'
    },
    params: {
        include_adult: false
    }
})



// https://api.themoviedb.org/3/movie/550?api_key=55881c34587ea582a685d26399d1be47