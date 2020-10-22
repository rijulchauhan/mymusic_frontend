import React, { Component } from 'react'
import axios from 'axios'
import {NavLink} from 'react-router-dom'

class Artist extends Component {
    state = {
        data:{
            songs : []
        }
    }
    componentDidMount() {
        let id=this.props.match.params.post_id;
        axios.get('http://localhost:8000/api/artist/'+id+'/')
            .then(res => {
                console.log(res.data)
                
                this.setState({
                    data:res.data
                })
            })
    }
    render() {
         const list=this.state.data.songs.map(l=>{
             return(
                 <li className="collection-item"><span>{l.title}</span><NavLink style={{float:"right"}} to={"/Play/"+l.id}>Play</NavLink></li>
             )
             
         })
        return (
            <div className="records container">
                 <div className="row" key={this.state.data.pk}>
                        <div className="col s6 m5 l5" >
                            <img src={this.state.data.img_url}/>
                        </div>
                        <div className="content col s6 m6 l6">
                            <div className="title">Artist: {this.state.data.name}</div>
                            <div className="story">
                                {this.state.data.dsc}
                            </div>
                        </div>
                    </div>
                <ol className="collection">
                     {list} 
                </ol>
            </div>
        )
    }
}
export default Artist;