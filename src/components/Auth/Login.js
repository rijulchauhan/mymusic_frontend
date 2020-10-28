import React, { Component } from 'react'
import axios from 'axios'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import {updateToken} from '../../action/store_token'
import {Redirect} from 'react-router-dom'

class Album extends Component {
    state={
        username:"",
        password:"",
        message:""
    }

    handleSubmit=(e)=>{
        e.preventDefault();

        if(this.state.username!==''&&this.state.password!==''){
            axios.post("http://localhost:8000/api/auth/token/",
            {
                username: this.state.username,
                password: this.state.password
            }
            ).then((res,err)=>{
                if(err) console.log(err)
                if(res.data.access&&res.data.refresh){
                    this.props.updateToken(res.data.access,res.data.refresh)
                    
                }else{
                    this.setState({
                        message:"Not valid"
                    })
                }
            })

        }

        console.log("Submitted");

    }
    handleUsername=(e)=>{
        this.setState({
            username:e.target.value
        })
    }
    handlePass=(e)=>{
        this.setState({
            password:e.target.value
        })
    }

    render(){

        if(this.props.token.access){
            return <Redirect to="/admin" />

        }


        return(
            <div className="container">
                <h1>Login Page</h1>
                <form onSubmit={(e)=>this.handleSubmit(e)}>
                    <input name="username" onChange={(e)=>this.handleUsername(e)} required/><br></br>
                    <input type="password" name="password" onChange={(e)=>this.handlePass(e)} required/>
                    <button type="submit">Login</button>
                </form>
                <p>{this.state.message}</p>
            </div>
        )
    }


}
const mapStateToProps=(state)=>{
    return{
        token:state.token
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        updateToken:(access,refresh)=>{
            dispatch(updateToken(access,refresh));
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Album);