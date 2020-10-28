const initState={
    token:{
        access:null,
        refresh:null
    },
    i:0,
    playlist:[1,2,3]
}
const myreduce=(state=initState,action)=>{
    if(action.type==='DELETE_SONG'){
        let newPlaylist = state.playlist.filter(song=>song.id!==action.id)
        return{
            ...state,
            playlist:newPlaylist
        }
    }
    if(action.type==='UPDATE_INDEX'){
        return{
            ...state,
            i:action.i
        }
    }
    if(action.type==='UPDATE_PLAYLIST'){
        let newPlaylist = state.playlist;
        newPlaylist[state.i] = action.id;
        return{
            ...state,
            playlist:[...newPlaylist]
        }
    }
    if(action.type==='UPDATE_TOKEN'){
        let token={access:action.access,refresh:action.refresh};
        return{
            ...state,
            token
        }
    }
    return state;
}
export default myreduce;