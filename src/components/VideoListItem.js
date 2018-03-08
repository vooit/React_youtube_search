/**
 * Created by Wojtek on 2018-03-06.
 */
import React from 'react';

const VideoLstItem = ({video, onVideoSelect}) => {
    //({video}) is same as below
    // const video = props.video;
    // const onVideoSelect = props.onVideoSelect;

    console.log(video)

    const imageUrl = video.snippet.thumbnails.default.url;
    const title = video.snippet.title;
    return (
        <li className="list-group-item"
            onClick={()=>onVideoSelect(video)}
        >
            <div className="video-list media">
                <div className="media-left">
                    <img className="media-object" src={imageUrl} />
                </div>
                <div className="media-body">
                    <div className="media-heading">{video.snippet.title}
                    </div>
                </div>
            </div>
        </li>
    )
}
export default VideoLstItem ;