import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Payments from "./Payments";

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li>
            <a href="/auth/google">Login With Google</a>
          </li>
        );
      default:
        return [
          <li key="1">
            <Payments />
          </li>,
          <li key="3" style={{ margin: "0 10px" }}>
            Credits: {this.props.auth.credits}
          </li>,
          <li key="2">
            <a href="/api/logout">Logout</a>
          </li>
        ];
    }
  }

  //   constructor(props) {
  //     super(props);
  //     this.loginRef = React.createRef();
  //   }

  //   componentDidMount() {
  //     this.props.prepareLogin(this.loginRef.current);
  //   }

  //   logout(e) {
  //     e.preventDefault();
  //     this.props.logout();
  //   }

  //   login(e) {
  //     this.props.login();
  //   }

  //   renderContent() {
  //     const { user } = this.props;

  //     if (user && user.name) {
  //       return (
  //         <Fragment>
  //           <li>
  //             <button id="logout" onClick={this.logout.bind(this)}>
  //               Logout
  //             </button>
  //           </li>
  //           <li>
  //             <p>Welcome {user.name}</p>
  //           </li>
  //         </Fragment>
  //       );
  //     } else {
  //       return (
  //         <li>
  //           <a id="login" ref={this.loginRef} href="#">
  //             Login with Google
  //           </a>
  //         </li>
  //       );
  //     }
  //   }

  //   render() {
  //     return (
  //       <nav>
  //         <div className="nav-wrapper">
  //           <Link to="/surveys" className="brand-logo">
  //             Emaily
  //           </Link>
  //           <ul className="float-right">{this.renderContent()}</ul>
  //         </div>
  //       </nav>
  //     );
  //   }
  // }

  // function mapStateToProps({ auth }) {
  //   return { auth };
  // }

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <Link
            to={this.props.auth ? "/surveys" : "/"}
            className="left brand-logo"
          >
            Emaily
          </Link>
          <ul className="right">{this.renderContent()}</ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);

//This uses class based component because i expect to place a helper function in here which will be reszponsible for deciding what to render inside the header component
