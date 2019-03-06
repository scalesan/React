import React from "react";
import ReactDOM from "react-dom";

// const App = () => {
//   window.navigator.geolocation.getCurrentPosition(
//     position => console.log(position),
//     err => console.log(err)
//   );
//   return <div>Lattitude:</div>;
// };

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { lat: null, errorMessage: "" };

    window.navigator.geolocation.getCurrentPosition(
      position => {
        //we called setstate
        this.setState({ lat: position.coords.latitude });

        //we did not!!!
        //this.state.lat = position.coords.lattitude
      },
      err => {
        this.setState({ errorMessage: err.message });
      }
    );
  }

  // componentDidMount(){
  //   console.log("My component was rendered to screen");
  // }

  // componentDidUpdate(){
  //   console.log('My component was just updated - it rerendered!');
  // }
  
  //react says we have to define render
  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    if(!this.state.errorMessage && this.state.lat)
    {
      return <div>Latitude: {this.state.lat}</div>
    }

    return <div>Loading</div>
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
