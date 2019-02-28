import React from 'react';

export class HomeComponent extends React.Component {

  render() {
    return (
      <div className="bg jumbotron">
        <div id="locator">
          <h1 className="display-1 font-italic">Welcome to Prepper!</h1>
          <p className="lead text-dark bg-light font-weight-normal text-center">The automatic weekly meal-plan generator based on your preferences and dietary needs</p>
          <a className="btn btn-outline-dark btn-lg" href="#" role="button">Sign-In</a>
        </div>
      </div>
    )
  }
}