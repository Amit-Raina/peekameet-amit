import "./App.css";
import React, { Component } from "react";
import { Fragment } from "react";

import SignIn from "../src/Components/SignIn/SignIn";
import UserProfile from "../src/Components/UserProfile/UserProfile";
import UserNotes from "../src/Components/Notes/Notes";
import AddNote from "../src/Components/AddNote/AddNote";

import { connect } from "react-redux";

import { Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Switch>
        {this.props.userData !== null && <Route path="/user-details" component={UserProfile} />}
        {this.props.userData !== null && <Route path="/user-notes" component={UserNotes} />}
         {this.props.userData !== null &&  <Route path="/user-add-notes" component={AddNote} />}
          <Route path="/" component={SignIn} />
        </Switch>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userData: state.user,
  };
};

export default connect(mapStateToProps, null)(App);
