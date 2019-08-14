import React, { Component } from "react";
import PropTypes from "prop-types";
class SearchResultsTweets extends Component {
  static propTypes = {
    results: PropTypes.array,
  };

  render() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th><abbr title="Position">User</abbr></th>
            <th><abbr title="Position">Tweet</abbr></th>
            <th><abbr title="Position">Favorite Count</abbr></th>
            <th><abbr title="Position">Retweet Count</abbr></th>
          </tr>
        </thead>
        <tbody>
         { 
           this.props.results ? this.props.results.map((ele, index) => 
             <tr key={index}>
                <td>{ele.username}</td>
                <td>{ele.tweet}</td>
                <td>{ele.favorite_count}</td>
                <td>{ele.retweet_count}</td>
              </tr>
            ) : <p></p>
          }
        </tbody>
      </table>
    )
  }
}
export default SearchResultsTweets;