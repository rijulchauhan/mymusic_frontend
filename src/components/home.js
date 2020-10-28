import React, { Component } from 'react'
import {connect} from 'react-redux'
class Home extends Component{
    render(){
        return (
            <div className="home">
                <div className="radio">
                    <blockquote style={{opacity:0.8}}>Music gives a soul to the universe, wings to the mind, flight to the imagination and life to everything.</blockquote>
                    <img src="/img/1.jpeg" width="100%" alt="1"/>
                    <img src="/img/2.jpg" width="100%" alt="2"/>
                    <img src="/img/3.jpg" width="100%" alt="3"/>
                </div>
                
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return{
        playlist:state.playlist
    }
}
export default connect(mapStateToProps)(Home);