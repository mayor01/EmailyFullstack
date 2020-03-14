import React, { Component } from "react";
//using react-router here
import { HashRouter as Router, Route } from "react-router-dom";
// import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";
// import attachSignin from "../services/googleAuth";

import Header from "./Header";
import Landing from "./Landing";
import Dashboard from "./Dashboard";
import SurveyNew from "./surveys/SurveyNew";

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  render() {
    return (
      <div className="container">
        <Router>
          <div>
            <Header />
            <Route exact path="/" component={Landing} />
            <Route exact path="/surveys" component={Dashboard} />
            <Route path="/surveys/new" component={SurveyNew} />
          </div>
        </Router>
      </div>
    );
  }
}

export default connect(null, actions)(App);

// class App extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       user: null,
//       loadedUser: false
//     };
//   }
// componentDidMount() {
//   let user = localStorage.getItem("survey_user");
//   if (user) {
//     user = JSON.parse(user);

//     this.setState({ user });
//   }

//   this.setState({ loadedUser: true });
// }

// login(user) {
//   this.setState({ user }, () => {
//     localStorage.setItem("survey_user", JSON.stringify(user));
//     location = location.href;
//   });
// }

// logout() {
//   localStorage.removeItem("survey_user");

//   location.reload();
// }

// prepareLogin(element) {
//   if (!this.state.loadedUser) {
//     setTimeout(() => this.prepareLogin(element), 200);
//     return;
//   }
//   if (!this.state.user) attachSignin(element, this.login.bind(this));
// }

// render() {
//   return (
//     <div>
//       <Router>
//         <div className="container">
//           <Header
//             prepareLogin={this.prepareLogin.bind(this)}
//             user={this.state.user}
//             logout={this.logout.bind(this)}
//           />
//           <Route
//             exact
//             path="/"
//             component={
//               this.state.user && this.state.user.name ? Dashboard : Landing
//             }
//           />
//           <Route exact path="/surveys" component={Dashboard} />
//           <Route path="/surveys/new" component={SurveyNew} />
//         </div>
//       </Router>
//     </div>
//   );
// }

//NOTE
//BrowserRouter is the brain of the react router that tell react router how to behave and looks at the current url and then changes a set of component
//that are visible on the screen at any given time
//The Route object is a react component thatis used to set up a rule between a certain route that the user might visit in our application and a set of
//components that will be visible on the screen
