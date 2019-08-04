import React, {Component} from 'react';
import TableHeader from "./common/tableHeader";
import TableBody from "./common/tableBody";
import Like from "./common/like";

class MoviesTable extends Component {
    columns = [
        {path: 'title', label: 'Title'},
        {path: 'genre.name', label: 'Genre'},
        {path: 'numberInStock', label: 'Stock'},
        {path: 'dailyRentalRate', label: 'Rate'},
        {key: 'like',
            content: movie => <Like movie={movie} onClick={()=>this.props.onLike(movie)} />},
        {key: 'delete',
            content: movie=>
                <button
                    onClick={()=>this.props.onDelete(movie)}
                    className="btn btn-danger btn-sm">
                    Delete
                </button>}
    ];
    render() {
        return (
            <table className="table">
                <TableHeader
                    columns={this.columns}
                />
                <TableBody
                    columns={this.columns}
                    data={this.props.movies}
                />
            </table>
        );
    }
}


export default MoviesTable;
