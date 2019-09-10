import React, { Component } from "react";
import ReactDOM from "react-dom";
import SearchResultsHashtags from "./SearchResultsHashtags";
import SearchResultsTweets from "./SearchResultsTweets";
import RandomHashtag from './RandomHashtag';
import Table from "./Table";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      data: {
        hashtags: [],
        tweets: []
      },
      hackerOne: []
    };

    this.updateInputValue = this.updateInputValue.bind(this);
    this.queryData = this.queryData.bind(this);
    this.getHackeroneData = this.getHackeroneData.bind(this);
  }

  updateInputValue(evt) {
    this.setState({
      inputValue: evt.target.value
    });
  }

  getHackeroneData() {
    fetch('https://hackerone.com/leaderboard/invites.json')
    // .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          hackerOne: result,
        });

      },
      (error) => {
        this.setState({
          isLoaded: true,
        });
      }
    )
  }

  queryData() {
    console.log(this.state.inputValue);
    fetch(`/search/?inputValue=${this.state.inputValue}`)
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          data: result,
        });

      },
      (error) => {
        this.setState({
          isLoaded: true,
        });
      }
    )
  }

  componentDidMount() {
    this.queryData();
    this.getHackeroneData();
  }

  render() {
    console.log('Hackerone', this.state.hackerOne)
    
    return (  
        <div className="container">
          <input
            className="input is-rounded"
            type="text"
            placeholder="Rounded input"
            value={this.state.inputValue}
            onChange={this.updateInputValue}
          />
            <button className="button is-large" onClick={this.queryData}>
              <span className="icon is-small">
              <i className="fab fa-twitter"></i>
              </span>
            </button>
          {
            this.state.data.hashtags.length > 0 ? 
            (
              <div className="columns">
                <div className="column">
                  <SearchResultsHashtags results={this.state.data.hashtags} />
                </div>
                <div className="column">         
                  <SearchResultsTweets results={this.state.data.tweets} />
                </div>
                <div className="column">         
                  
                </div>
              </div>
            )
            : 
            ''
          }   
        </div>
    )
  }
}

const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<App />, wrapper) : null;