/**
 * Created by Wojtek on 2018-03-06.
 */
import React, {Component} from "react";

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {term: ""};
    }

    render() {
        return (
            <div className="search-bar">
                <label htmlFor="searchBar">Search your movie</label>
                <input id="searchBar"
                       placeholder="what to see?"
                       value={this.state.term}
                       onChange={event => this.onInputChange(event.target.value)}
                />
            </div>
        );
    }

    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
}

export default SearchBar;