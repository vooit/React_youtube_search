/**
 * Created by Wojtek on 2018-03-06.
 */
import React from 'react';
import VideoListItem from './VideoListItem'


const VideoList = (props) => {

    const videoItems = props.videos.map(video => {
        return (
            <VideoListItem
                onVideoSelect={props.onVideoSelect}
                key={video.etag}
                //passed video as props
                video={video}
            />
        );
    });


    return (
        <div>
            <ul className="col-md-6 list-group">
                {videoItems}
            </ul>
        </div>

    )
}
export default VideoList;

