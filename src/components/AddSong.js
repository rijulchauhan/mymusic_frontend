import React, { Component } from 'react'
import axios from 'axios'
import { useForm } from 'react-hook-form'


class AddSong extends Component {

    render() {
        const onSubmit = (data) => {
            console.log(data)
        }
        return (
            <div className="addsong row container">
                <form onSubmit={useForm().handleSubmit(onSubmit)}>
                    <div className="col s6 m6 l6 ">
                        <input type="submit" ><img src="/img/upload.png" /></input>
                    </div>
                    <div className="col s6 m6 l6">

                        <label for="song">Song</label>
                        <input type="text" id="song"></input>
                        <label for="artist">Artist</label>
                        <input type="text" id="artist"></input>
                        <label for="file" name="file" w>Upload</label><br />
                        <input type="file" id="file"></input>
                    </div>

                </form>
            </div>
        )
    }
}
export default AddSong;