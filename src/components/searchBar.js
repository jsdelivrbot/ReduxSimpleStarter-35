/**
 * Created by ishi on 1/15/17.
 */

import React, { Component } from 'react'

/*
// functional component
const SearchBar = () => {
    return (
        <input type="search"/>
    )
}
*/

// class component using ES6 class
class SearchBar extends Component  {

    constructor (props) {
        super(props)

        this.state = {term: ''}
    }
    render () {
        return (
            <div className="search-bar">
                <input
                    value= {this.state.term}
                    onChange={event => this.onInputChange(event.target.value)}
                />
            </div>
        )
    }

    onInputChange (term) {
        this.setState({term})
        this.props.onSearchTermChange(term)
    }
}

export default SearchBar;