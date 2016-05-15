import React from 'react';
import _ from 'lodash';
import YTSearch from './services/youtube-search';
import Header from './components/common/header';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyApZXbEM4wgH8xmEQQ16WD1uuCovYOuQZ8';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            'videos' : [],
            'selectedVideo' : null,
            'term' : '',
            'maxResult' : localStorage.getItem('maxResult') || 5
        };

        YTSearch({key: API_KEY, term: 'surfboards', maxResults: this.state.maxResult}, (videos) => {
            this.setState({
                'videos' : videos,
                'selectedVideo' : videos[0]
            });
        });
    }

    videoSearch(term) {
        YTSearch({key: API_KEY, term: term, maxResults: this.state.maxResult}, (videos) => {
            this.setState({
                'videos' : videos
            });
        });
    }

    onVideoClicked(selectedVideo) {
        this.setState({
            'selectedVideo' : selectedVideo
        });
    }

    render() {
        const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);
        return (
            <section>
                <Header />
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12">
                            <SearchBar onInputChange={videoSearch.bind(this)} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-7">
                            <VideoDetail video={this.state.selectedVideo} />
                        </div>
                        <div className="col-md-4 col-md-offset-1">
                            <VideoList videos={this.state.videos} onVideoClicked={this.onVideoClicked.bind(this)} />
                        </div>
                    </div>
                </div>
                <div className="modal fade" id="settingsModal" tabindex="-1" role="dialog">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                                <h4 className="modal-title">Configure API Settings</h4>
                            </div>
                            <div className="modal-body">
                                <form className="form-horizontal">
                                    <div className="form-group">
                                        <label htmlFor="maxResult" className="col-sm-4 control-label">Search Results Count</label>
                                        <div className="col-sm-6">
                                            <input type="text" className="form-control" id="maxResult" placeholder="Max No. of Search Results"
                                                value={this.state.maxResult}
                                                onChange={(event) => {
                                                    this.setState({'maxResult':event.target.value});
                                                    localStorage.setItem('maxResult', event.target.value);
                                                }} />
                                            <span className="help-text text-info">Advice - Please enter value between 5 - 50</span>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
			</section>
		)
   	}
}

export default App;
