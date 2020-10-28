import React, { Component } from 'react'
import axios from 'axios'
import {connect} from 'react-redux'

class Audio extends Component {
    state = {
        song: {}
    }
    componentDidMount() {
        let id = this.props.match.params.get_id;
        axios.get('http://localhost:8000/api/song/' + id )
            .then(res => {
               this.setState({
                   song: res.data
               })
            })
    }
    render() {
        return (
            <div className="row container" >
                <div>
                        <div className="">
                            <div className="image col s12 m5 l5">
                                <img src={"http://localhost:8000"+this.state.song.img_url} height="300px" />
                            </div>
                            <div className="content col s12 m6 l6">
                                <div className="title">{this.state.song.title}</div>
                                <div>Artist: {this.state.song.artists}</div>
                                <div>Album: {this.state.song.album}</div>
                            </div>
                        </div>
                    </div>
            </div>
        )
    }
}
const mapStateToProp=(state,ownProps)=>{
    let id=ownProps.match.params.song_id;
    return{
        song:state.playlist.find(song=>song.id==id)
    }
}

export default connect(mapStateToProp)(Audio);