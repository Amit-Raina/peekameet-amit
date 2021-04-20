import './App.css';
import React , { Component }  from 'react';
import {Fragment} from 'react';

import SignIn from '../src/Components/SignIn/SignIn';
import UserProfile from '../src/Components/UserProfile/UserProfile';
import UserNotes from '../src/Components/Notes/Notes';
import AddNote from '../src/Components/AddNote/AddNote';
//import {signIn , getFollowUpNotes , getUserDetails , addNote} from './api/index';

import { Switch , Route } from 'react-router-dom';

class App extends Component {

  // componentDidMount(){
  //   const data = {
  //     createdFor:"5f3df18c72aad34d05e53903",
  //     email: "pragyanshu.sharma@daffodilsw.com",
  //     password:"Qwerty123@",
  //     token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJJZCI6IjVmM2RmMThjNzJhYWQzNGQwNWU1MzkwMyIsInVzZXJUeXBlIjoiVVNFUiIsImNyZWF0ZWRBdCI6MTYxODgzNTIwMTMxMn0sImlhdCI6MTYxODgzNTIwMSwiZXhwIjoxNjI2NjExMjAxLCJpc3MiOiJVU0VSIn0.csjRLsrX60to6Jpkb-fdc1B4PFnjKgcp1eHi3Y2tjBI"
  //   }
      //  addNote(data.createdFor,"followup","amit",1576488098421,data.token);
      //  getFollowUpNotes(data.createdFor,data.token);

  // }
  
  render(){

    return (
      <Fragment>

        <Switch>
          <Route path="/" exact  component={SignIn}/>
          <Route path="/user-details" component={UserProfile}/>
          <Route path="/user-notes"  component={UserNotes}/>
          <Route path="/user-add-notes"  component={AddNote}/>
        </Switch>    
        
      </Fragment>
    );
  }
}



export default App;
