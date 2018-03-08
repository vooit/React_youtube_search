import _ from "lodash";
import React from "react";
import YTSearch from "youtube-api-search";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
const API_KEY = 'AIzaSyCviDeN5VZpk-ckbJoXjVPmQVFpbwb00JA';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            videos: [],
            selectedVideo: null
        };

        this.videoSearch('splitboarding')

    }

    videoSearch(term) {
        YTSearch({key: API_KEY, term: term}, (videos) => {
            console.log(videos);
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });
        })
    }


    render() {
        return (
            <div>
                <SearchBar onSearchTermChange = {term => this.videoSearch(term)}/>
                <div className="row">
                    <VideoDetail video={this.state.selectedVideo}/>
                    <VideoList
                        onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                        videos={this.state.videos}/>
                </div>


            </div>
        );
    }
}
export default App;