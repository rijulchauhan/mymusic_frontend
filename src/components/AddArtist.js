import React, { Component } from 'react'
import axios from 'axios'
import upload from './../img/upload.png'
class AddArtist extends Component {
    state={
        posterValid:false,
        fileValid:false,
        title:"",
        message:""
    }
    getExtension=(filename)=>{
        var parts=filename.split('.');
        return parts[parts.length-1]
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        if(this.state.posterValid&&this.state.fileValid&&this.state.message !== ""){
            console.log("Submitted");
        }else{
            this.setState({
                message:"Try again"
            })
        }
    }
    handleTitle=(e)=>{
        this.setState({
            title:e.target.value
        })
    }
    handlePoster=(e)=>{
        var ext = this.getExtension(e.target.value);
        switch(ext.toLowerCase()){
            case 'jpg':
            case 'jpeg':
            case 'bmp':
            case 'png':   
            this.setState({
                posterValid: true
            })
        }
    }
    handleSong=(e)=>{
        var ext = this.getExtension(e.target.value);
        if(ext==='mp3'){
            this.setState({
                fileValid:true
            })
        }
    }
    render() {
        return (
            <div className="addArtist row container">
                <form onSubmit={(e)=>this.handleSubmit(e)}>
                    <div className="col s6 m6 l6 ">
                        <button type="submit"><img src={upload}/></button>
                    </div>
                    <div className="col s6 m6 l6">

                        <label for="song">Title</label>
                        <input type="text" id="title" onChange={(e)=>this.handleTitle(e)} required/>
                        <label for="poster">Poster</label>
                        <input type="file" id="poster" onChange={(e)=>this.handlePoster(e)} accept=".jpg,.png,.jpeg,.bmp" required/><br/>{this.state.poster}
                        <label for="file" name="file">Upload</label><br />
                        <input type="file" id="file" onChange={(e)=>this.handleSong(e)} accept=".mp3" required/>
                    </div>
                </form>
                <p>
                    {this.state.message}
                </p>
            </div>
        )
    }
}
export default AddArtist;