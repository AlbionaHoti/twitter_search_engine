import React, { Component } from "react";
import PropTypes from "prop-types";
class SearchResultsHashtags extends Component {
  static propTypes = {
    results: PropTypes.array,
  };

  render() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th><abbr title="Position">Hashtag</abbr></th>
            <th><abbr title="Played">Appeard (num of times)</abbr></th>
          </tr>
        </thead>
        <tbody>
         { 
           this.props.results ? this.props.results.map((ele, index) => 
             <tr key={index}>
                <td>{ele[0]}</td>
                <td>{ele[1]}</td>
              </tr>
            ) : <p></p>
          }
        </tbody>
      </table>
    )
  }
}
export default SearchResultsHashtags;