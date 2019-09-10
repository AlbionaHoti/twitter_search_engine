import React, { Component } from "react";
import PropTypes from "prop-types";
class RandomHashtag extends Component {
  static propTypes = {
    results: PropTypes.array,
  };

  render() {
    console.log();
    return (
      <table className="table">
        <thead>
          <tr>
            <th><abbr title="Position">Random Hashtag</abbr></th>
          </tr>
        </thead>
        <tbody>
         { 
           this.props.results ? this.props.results.map((ele, index) => 
             <tr key={index}>
                <td>{ele.rand_hashtag}</td>
              </tr>
            ) : <p></p>
          }
        </tbody>
      </table>
    )
  }
}
export default RandomHashtag;