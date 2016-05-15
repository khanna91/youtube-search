import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.displayName = 'SearchBar';
        this.state = {'term' : props.term};
    }

    onInputChange(term) {
        this.setState({
            'term' : term
        });
        this.props.onInputChange(term);
    }

    render() {
        return (
            <div className="search-bar">
                <input className="form-control"
                    placeholder="Search for your favourite movie"
                    value={this.state.term}
                    onChange={event => this.onInputChange(event.target.value)} />
            </div>
        )
    }
}

export default SearchBar;
