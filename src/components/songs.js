import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

class Songs extends Component {
    state = {
        songs: []
    }
    componentDidMount() {
        axios.get('http://localhost:8000/api/songs')
            .then(res => {
                console.log(res)
                this.setState({
                    songs: res.data
                })
            })
    }
    render() {
        const items = this.state.songs;
        
        const list = items.length ? (
            items.map(item => {
                return (
                    <div className="col s12 m4 l4" key={item.pk}>
                        <div className="card">
                            <div className="card-image">
                                <img src={"http://localhost:8000" + item.fields.img_url} width="200px" height="300px" />   
                            </div>
                            <div className="card-content">
                            <span className="card-title">{item.fields.title}</span>{/* <span>{item.artist}</span> */}
                            </div>
                            <div className="card-action">
                                <Link to={"/Play/"+item.pk}>Play</Link>
                            </div>
                        </div>
                    </div>
                )
            })
        ) : (
                <p>
                    No Songs left
                </p>
            ); 
        return (
            <div className="Songs container">
                <div className="row">
                    {list}
                </div>
            </div>
        )
    }
}
export default Songs;