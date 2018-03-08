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
        <div className="col-md-4">
            <ul className=" list-group">
                {videoItems}
            </ul>
        </div>

    )
}
export default VideoList;

