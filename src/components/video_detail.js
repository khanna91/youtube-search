import React, { Component } from 'react';

const VideoDetail = ({video}) => {
    if(!video) {
        return (
            <div className="alert alert-info">Loading...</div>
        )
    }
    const url = 'https://www.youtube.com/embed/' + video.id.videoId;
    return (
        <div className="video-detail">
            <iframe src={url} className="embeded-responsive-frame"></iframe>
            <div className="detail">
                <h5>{video.snippet.title}</h5>
                <p>{video.snippet.description}</p>
            </div>
        </div>
    )
};

export default VideoDetail;
