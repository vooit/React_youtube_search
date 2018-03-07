import _ from "lodash";
import React, {Component} from "react";
import YTSearch from "youtube-api-search";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
// import VideoListItem from "./VideoListItem";


const API_KEY = 'AIzaSyCviDeN5VZpk-ckbJoXjVPmQVFpbwb00JA';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videos: [],
            selectedVideo: null
        };

        YTSearch({key:API_KEY, term:'splitboards'}, (videos)=>{
            console.log(videos);
            this.setState({
                videos,
                selectedVideo: videos[0]
            });
        })
    }

    render() {
        return (
            <div>
                <p>HELLO there!</p>
                <SearchBar/>
                <VideoList videos={this.state.videos}/>
            </div>
        );
    }
}
export default App;