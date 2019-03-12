import { combineReducers } from 'redux';

 const songsReducer = () =>{
    return [
        {
            title: "Rock the Boat", duration: '4:20' 
        },
        {
            title: "No Scrubs", duration: '4:05'
        },
        {
            title: 'Macarena', duration: '2:30'
        },
        {
            title: "U Got It Bad", duration: '3.20'
        }
    ]
}

const SelectedSongReducer = (selectedSong = null, action) =>{
    if(action.type === "SONG_SELECTED") {
        return action.payload;
    }
    return selectedSong;
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: SelectedSongReducer
})