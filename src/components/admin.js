import React,{Component} from 'react'

class Admin extends Component{
    render(){
        return(
            <div className="admin container">
            <div className="row">
                <div className="col s12 m4 l4">
                    <h3>Add Song</h3>
                    <div className="plus"><a href="/Admin/AddSong"><img src="/img/plus.svg" width="50px"/></a></div>
                </div>
                <div className="col s12 m4 l4">
                <h3>Add Artist</h3>
                <div className="plus"><a href="/Admin/AddSong"><img src="/img/plus.svg" width="50px"/></a></div>
                </div>
                <div className="col s12 m4 l4">
                <h3>Add Album</h3>
                <div className="plus"><a href="/Admin/AddSong"><img src="/img/plus.svg" width="50px"/></a></div>
                </div>
            </div>
            </div>
        )
    }
}
export default Admin;