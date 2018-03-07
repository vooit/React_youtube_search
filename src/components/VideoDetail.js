/**
 * Created by Wojtek on 2018-03-06.
 */
import React from 'react';

const VideoDetail = ({video}) => {

    const videoId = video.id.videoId;
    const url = ''

    return (
        <div className="col-md-6 video-detail">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src="" frameborder="0"></iframe>
            </div>
            <div className="details">
                <div>{video.snippet.title}</div>
                <div>{video.snippet.description}</div>
            </div>
        </div>
    )
}
export default VideoDetail;