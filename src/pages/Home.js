import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import catalogJson from '../catalog.json'

class Home extends Component {
    constructor() {
        super()
    
        // state initial
        this.state = {
          catalog: []
        }
    }
    
    componentDidMount() {
      this.setState ({
          catalog: catalogJson
      })
    }

    render() {
        const { catalog } = this.state
        console.log(catalog)
        return (
            <div>
                {catalog.map(movie => (
                <Link
                    key={`${movie.title}-${movie.id}`}
                    to={`/movie/${movie.id}`}
                >
                    <p>{movie.title}</p>
                </Link>
                ))}    
            </div>
        );
    }
}

export default Home;