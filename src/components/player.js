import React,{Component} from 'react'
import axios from 'axios';
import poster from '../img/1.jpg'
import play from '../img/play-button.svg'
import pause from '../img/pause.svg'
import next from '../img/next.svg'
import back from '../img/back.svg'
import volume from '../img/speaker.svg'
import {connect} from 'react-redux'
import {updateIndex} from '../action/update_i'

class Player extends Component{
    state={
        url:null,
        title:"ABC",
        artists:"Artist",
        img_url:poster,
        time:"0:00",
        ttime:"0:00",
        volume: 0,
        playbutton:"/img/play-button.svg",
        playalt:"play"
    }
    handlePlay=(e)=>{
        if(e.target.id==="play"){
            e.target.src=pause;
            e.target.id="pause";
            e.target.playalt="pause";
            document.getElementById("player").play();
        }else{
            e.target.src=play;
            e.target.id="play";
            e.target.playalt="play";
            document.getElementById("player").pause();
        }
    }
    handleNext=(e)=>{
        let newI = this.props.i;
        if((this.props.i)<(this.props.playlist.length - 1))
            newI++
        else if((this.props.i) = (this.props.playlist.length - 1))
            newI = 0
        this.props.updateIndex(newI);
        document.getElementById("player").setAttribute("autoplay", "true");
        this.updatePlayer();
       
        
    }

    handlePrev=(e)=>{
        let newI = this.props.i;
        if((this.props.i) == 0)
            newI = this.props.playlist.length -1;
        else
            newI--;
        this.props.updateIndex(newI);
        document.getElementById("player").setAttribute("autoplay", "true");
        this.updatePlayer();
        
    }

    handleVolume=(e)=>{
        if(e.target.id==="on"){
            e.target.style="opacity:0.5";
            document.getElementById('player').muted = true;
            e.target.id="off";
            e.target.playalt="mute";
        }else{
            document.getElementById('player').muted = false;
            e.target.style="opacity:1";
            e.target.id="on";
            e.target.playalt="on";
        }
    }

    componentDidMount(){
        
        let audio = document.getElementById('player');
        audio.pause();
        audio.addEventListener('timeupdate', (event) => {
            
            this.updateCurrentTime()
            this.updateDuration()
            document.getElementById("bar-control").style= `width:${this.seekBarLength()}%`
          });
        audio.addEventListener('volumechange', (event) => {
            this.updateVolume();
          });
          audio.addEventListener("ended", () => this.handleNext());
          this.updatePlayer();
        audio.addEventListener('playing', this.updatePlayer());
    }

    updateVolume(){
        this.state.volume = Math.ceil(document.getElementById('player').volume * 100);
        document.getElementById("vol-bar-control").style= `width:${this.state.volume}%`;
        document.getElementById('vol-value').innerText = Math.floor(this.state.volume) + "%";

    }

    updatePlayer(){
        try{
            document.getElementById("play").target.id="pause";
        } catch(e){
            console.log(e)
        }
        if(this.props.playlist.length !== 0 ){
            let audio = document.getElementById('player');
            let poster = document.getElementById('poster');
            // audio.setAttribute("src", "http://65.0.148.24:8000/static/audios/" + this.state.playlist[this.state.i] + ".mp3");
            // poster.setAttribute("src", "http://65.0.148.24:8000/static/posters/" + this.state.playlist[this.state.i] + ".jpg");
            
            axios.get('http://localhost:8000/api/song/' + this.props.playlist[this.props.i] )
            .then(res => {
                // console.log(res)
                this.state.title = res.data.title;
                this.state.artists = res.data.artists;
                document.getElementById("title").innerText= this.state.title;
                document.getElementById("artists").innerText= this.state.artists;
                
            })


        }
        
    }

    updateDuration(){
        
        let audio = document.getElementById('player');
        if(audio.duration)
            document.getElementById("duration").innerText = this.timeInFormat(Math.floor(audio.duration));
        
    }

    seekBarLength(){
        let audio = document.getElementById('player');
        if(audio.duration){
            return (audio.currentTime * 100) / audio.duration;
        }
        return 0;
    }

    updateCurrentTime(){
        let audio = document.getElementById('player');
        
        document.getElementById("currentTime").innerText = this.timeInFormat(Math.floor(audio.currentTime));
        
    }

    timeInFormat(seconds){
        if(seconds <10){
            return "0:0" + seconds;
        } else if (seconds >= 10 & seconds <60){
            return "0:" + seconds;
        } else if( seconds >= 60){
            let mins = Math.floor(seconds / 60)
            let rem_secs = Math.floor(seconds % 60)
            if(rem_secs <10)
                return `${mins}:0${rem_secs}`
            if(rem_secs >= 10)
                return `${mins}:${rem_secs}`
        }

    }

    handleProgessChange(e){
        let audio = document.getElementById('player');
        let width = e.nativeEvent.offsetX/e.target.offsetWidth;
        let newCurrentTime = width * audio.duration;
        audio.currentTime = newCurrentTime;
        
        
    }

    handleVolumeChange(e){
        let audio = document.getElementById('player');
        let width = e.nativeEvent.offsetX/e.target.offsetWidth;
        audio.volume = width;

    }



    render(){
        this.updatePlayer();
        return(
            <div className="player row">
                <audio id="player" hidden src={"http://65.0.148.24:8000/static/audios/" + this.props.playlist[this.props.i] + ".mp3"} controls autoPlay />
                    <div className="player-icon col s1 m1 l1">
                        <img id="poster" src={"http://65.0.148.24:8000/static/posters/" + this.props.playlist[this.props.i] + ".jpg"} width="100%" height="100px"/>
                    </div>
                    <div className="detail pos col s2 m2 l2 white-text">
                    <span className="title" id="title">{this.state.title}</span><br />
                    <span id="artists">{this.state.artists}</span>
                    </div>
                    <div className="player-controls col s5 m5 l6">
                        <div className="play center-align ">
                            <img src={back} alt="back" onClick={(e)=>this.handlePrev(e)}/>
                            <img id="play" src={this.state.playbutton} onClick={(e)=>this.handlePlay(e)} alt={this.state.playalt}/>
                            <img src={next} alt="next" onClick={(e)=>this.handleNext(e)}/>
                        </div>
                        <div className="bar">
                            <div id="currentTime">0:00</div>
                            <div className="seekbar-background" onClick={(e)=> this.handleProgessChange(e)}>
                                <div id="bar-control"></div>
                            </div>
                            <span id="duration">0:00</span>
                        </div>
                    </div>
                    <div className="volume col s2 m2 l3">
                        <img id="on" src={volume} alt="volume" onClick={(e)=>this.handleVolume(e)}/>
                    <div className="seekbar-background volume-seekbar-background" onClick={(e)=> this.handleVolumeChange(e)}>
                        <div id="vol-bar-control" ></div>
                    </div>
                    <span id="vol-value">100%</span>
                </div>
            </div>
        )
    }
}
const mapStateToProps=(state,ownProps)=>{
    console.log(ownProps)
    return{
        playlist:state.playlist,
        i:state.i
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        updateIndex:(i)=>{
            dispatch(updateIndex(i))
        }
    }  
}
export default connect(mapStateToProps,mapDispatchToProps)(Player);