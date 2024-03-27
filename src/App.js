import React, { useState, useEffect } from 'react';
import img from './1.jpg';
import './styles.css'; // Import the CSS file

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: 'Shegs_Ish',
        bio: 'I am an enthusiastic problem-solver building web experiences with code, turning ideas into reality with software. Passionate learner.',
        imgSrc: img,
        profession: 'Software Engineer',
      },
      shows: false,
      timeSinceMounted: 0,
    };
  }

  toggleProfile = () => {
    this.setState((prevState) => ({ shows: !prevState.shows }));
  };

  componentDidMount() {
    const intervalId = setInterval(() => {
      this.setState((prevState) => ({ timeSinceMounted: prevState.timeSinceMounted + 1 }));
    }, 1000); // Update time every second

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }

  render() {
    const { person, shows, timeSinceMounted } = this.state;

    return (
      <div className="App">
        <div className="card">
          <img style={{ width: '500px' }} src={person.imgSrc} alt={person.fullName} className="card-img-top" />
          <div className="card-body text-center">
            <button className="btn btn-success" onClick={this.toggleProfile}>
              {shows ? 'Hide Profile' : 'Show Profile'}
            </button>
            {shows && (
              <div className="card-text">
                <h2>{person.fullName}</h2>
                <p>{person.profession}</p>
                <p>{person.bio}</p>
                <p>Time since mounted: {timeSinceMounted} seconds</p>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
