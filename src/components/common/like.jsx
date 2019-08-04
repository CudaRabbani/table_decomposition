import React, {Component} from 'react';

class Like extends Component {
    getLikeClass = (isLike) => {
        let likeClass = "fa fa-heart";
        return likeClass += isLike ? "" : "-o";
    };
    render() {
        const {movie, onClick} = this.props;
        return (
            <i
                style={{cursor:'pointer'}}
                className={this.getLikeClass(movie.liked)}
                onClick={onClick}
                aria-hidden="true"
            >
            </i>
        );
    }
}


export default Like;

