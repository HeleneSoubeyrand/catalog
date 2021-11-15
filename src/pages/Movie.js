import React, { Component } from 'react';

import catalogJson from '../catalog.json'

class Movie extends Component {
    render() {
        const id  = this.props.match.params.id 
        console.log(id)
        const movie = catalogJson.find(element => element.id === parseInt(id))
        console.log(movie)
        return (
            <div>
                 <h1>{movie.title}</h1>
                 <p>Realisateur {movie.director}</p>
            </div>
        );
    }
}

export default Movie;