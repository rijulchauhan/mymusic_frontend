import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import { updateIndex } from '../action/update_i'
import {updatePlaylist} from '../action/update_playlist'

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
                    <div className="col s12 m4 l4" key={item.id}>
                        <div className="card">
                            <div className="card-image">
                                <img src={"http://localhost:8000" + item.img_url} width="200px" height="300px" />   
                            </div>
                            <div className="card-content">
                            <span className="card-title"><Link to={"/Play/"+item.id}>{item.title}</Link></span>{/* <span>{item.artist}</span> */}
                            </div>
                            <div className="card-action" style={{cursor:"pointer"}} onClick={()=>{this.props.updatePlaylist(item.id)}}>
                                PLAY
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
const mapStateToProps=(state)=>{
    return{
        playlist:state.playlist
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        updatePlaylist:(id)=>{
            dispatch(updatePlaylist(id))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Songs);