import './App.css';
import React , { Component }  from 'react';
import {Fragment} from 'react';
import SignIn from '../src/Components/SignIn/SignIn';
import UserProfile from '../src/Components/UserProfile/UserProfile';
import UserNotes from '../src/Components/Notes/Notes';
import { Switch , Route } from 'react-router-dom';
import axios from 'axios';

class App extends Component {

  
  componentDidMount(){
    const data = {
      email: "pragyanshu.sharma@daffodilsw.com",
      password:"Qwerty123@"
    }

    axios.post('http://apipeekameet.cloudzmall.com:3001/peekameet/api/v1/public/user/login', data)
    .then(response => {console.log(response);})
  }

  render(){
    return (
      <Fragment>

        <Switch>
          <Route path="/" exact  component={SignIn}/>
          <Route path="/user-details" component={UserProfile}/>
          <Route path="/user-notes"  component={UserNotes}/>
        </Switch>    
        
      </Fragment>
    );
  }
}


export default App;
