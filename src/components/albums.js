import React, { Component } from 'react'
import axios from 'axios'
import { Link, NavLink } from 'react-router-dom'

class Album extends Component {
    state = {
        Album: []
    }
    componentDidMount() {
        axios.get('http://localhost:8000/api/albums')
            .then(res => {
                this.setState({
                    Album: res.data
                })
            })
    }
    render() {

        const items = this.state.Album;
        console.log(items);
        const list = items.length ? (
            items.map(item => (
                <div className="item col s12 m5 l3" key={item.pk}>
                    <img src={item.fields.img_url} width="250px" /><br />
                    <NavLink class="black-text" to={"/Album/" + item.pk}>{item.fields.name}</NavLink>
                </div>
            )
            )
        ) : (
            <p>
                No Album left
            </p>
        );
        return (
            <div className="Artist container">
                <div className="row">
                    {list}
                </div>

            </div>
        )
    }
}
export default Album;