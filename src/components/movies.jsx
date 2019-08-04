import React, {Component} from 'react';
import {getMovies} from "../services/fakeMovieService";
import {getGenres} from "../services/fakeGenreService";
import MoviesTable from "./moviesTable";
import Pagination from "./common/pagination";
import {paginate} from "./util/paginate";

class Movies extends Component {
    state={
        movies: [],
        genres: [],
        pageSize: 4,
        currentPage: 1
    };
    componentDidMount() {
        const movies = getMovies();
        const genres = getGenres();

        this.setState({movies, genres});
    };

    handleLike = (movie) => {
        const movies = [...this.state.movies];
        const index = movies.indexOf(movie);
        movies[index] = {...movies[index]};
        movies[index].liked = !movies[index].liked;
        this.setState({movies});
    };

    handleDelete = (movie) => {
        const movies = this.state.movies.filter(m=>(
            m._id !== movie._id
        ));
        this.setState({movies});
    };

    handlePagination = (page) => {
        this.setState({currentPage: page});
    };



    render() {
        const {movies, pageSize, currentPage} = this.state;
        const paginatedMovies = paginate(movies, pageSize, currentPage);
        return (
            <div className="row">
                <div className="col">
                    <p>There are {movies.length} movies in the list</p>
                    <MoviesTable
                        movies={paginatedMovies}
                        onLike={this.handleLike}
                        onDelete={this.handleDelete}
                    />
                    <Pagination
                        totalItem={movies.length}
                        currentPage={this.state.currentPage}
                        pageSize={this.state.pageSize}
                        onPageChange={this.handlePagination}
                    />
                </div>
            </div>
        );
    }
}


export default Movies;
