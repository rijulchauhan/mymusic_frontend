import React, { Component } from 'react'
import axios from 'axios'

class Audio extends Component {
    state = {
        song: {}
    }
    componentDidMount() {
        let id = this.props.match.params.post_id;
        axios.get('http://localhost:8000/api/song/' + id)
            .then(res => {
                this.setState({
                    song: res.data
                })
            })
    }
    render() {
        return (
            <div className="player container" >
                <div>
                    <div className="row">
                        <div className="image col s12 m5 l5">
                            <img src={"http://localhost:8000" + this.state.song.img_url} height="300px" />
                        </div>
                        <div className="content col s12 m6 l6">
                            <div className="title">{this.state.song.title}</div>
                            <div>Artist: {this.state.song.artists}</div>
                            <div>Album: {this.state.song.album}</div>
                        </div>
                    </div>
                    <div className="control">
                        <audio src={"http://localhost:8000" + this.state.song.url} title={this.state.song.title} controls loop autoPlay preload="" />
                    </div>
                </div>
            </div>
        )
    }
}
export default Audio;