import React, { Component } from 'react';
import VideoItem from './video_item';

class VideoList extends Component {
    constructor(props) {
        super(props);
        this.displayName = 'VideoList';
    }

    renderVideoList() {
        const _this = this;
        return this.props.videos.map(function(video) {
            return <VideoItem video={video} key={video.etag} onVideoClicked={_this.props.onVideoClicked} />
        });
    }

    render() {
        return (
            <ul className="row list-unstyled video-list">
                {this.renderVideoList()}
            </ul>
        )
    }
}

export default VideoList;
