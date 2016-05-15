import React, { Component } from 'react';

class VideoItem extends Component {
    constructor(props) {
        super(props);
        this.displayName = 'VideoItem';
    }

    render() {
        return (
            <li className="row video-item" onClick={(event) => this.props.onVideoClicked(this.props.video)}>
                <div className="col-xs-4">
                    <img src={this.props.video.snippet.thumbnails.default.url} className="img-thumbnail img-responsive" />
                </div>
                <div className="col-xs-8 detail">
                    <h5 className="title">{this.props.video.snippet.title}</h5>
                    <p>{this.props.video.snippet.description}</p>
                </div>
            </li>
        )
    }
}

export default VideoItem;
