import React from 'react';

// const BackgroundImagePage = () => {
//   return (
//       <div className="bg"></div>
//   );
// }

// export default BackgroundImagePage;

export class HomeComponent extends React.Component {

  render() {
    return (
      <div className="bg jumbotron">
        <div id="locator">
          <h1 className="display-1">Welcome to</h1>
          <h1 className="display-1">Prepper!</h1>
          {/* <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
          <hr className="my-4" />
          <p>It uses utility classes for typography and spacing to space content out within the larger container.</p> */}
          {/* <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a> */}
        </div>
      </div>
    )
  }
}