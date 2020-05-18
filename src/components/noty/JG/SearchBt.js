import React, { Component } from 'react';

class SearchBt extends Component {
    render() {
        return (
            <div className="search-bt">
                <form>
                    <input type="text" placeholder="영화검색"></input>
                </form>
            </div>
        );
    }
}

export default SearchBt;