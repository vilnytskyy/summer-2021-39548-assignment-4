import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './css/App.css';
import Home from './components/Home';
import UserProfile from './components/UserProfile';
import LogIn from './components/LogIn';
import Credits from './components/Credits';
import Debits from './components/Debits';

class App extends Component {
    constructor() {
        super();

        this.state = {
            accountBalance: 14568.27,
            currentUser: {
                userName: 'joe_shmo',
                memberSince: '07/23/96'
            }
        }
    }

    mockLogIn = (logInInfo) => {
        const newUser = { ...this.state.currentUser }
        newUser.userName = logInInfo.userName
        this.setState({ currentUser: newUser })
    }

    render() {
        const HomeComponent = () => (<Home accountBalance={this.state.accountBalance} />);
        const UserProfileComponent = () => (
            <UserProfile userName={this.state.currentUser.userName} memberSince={this.state.currentUser.memberSince} />
        );
        const LogInComponent = () => (<LogIn user={this.state.currentUser} mockLogIn={this.mockLogIn} />);
        const CreditsComponent = () => (<Credits />);
        const DebitsComponent = () => (<Debits />);

        return (
            <Router>
                <Switch>
                    <Route exact path="/" render={HomeComponent} />
                    <Route exact path="/userProfile" render={UserProfileComponent} />
                    <Route exact path="/credits" render={CreditsComponent} />
                    <Route exact path="/debits" render={DebitsComponent} />
                    <Route exact path="/login" render={LogInComponent} />
                </Switch>
            </Router>
        );
    }
}

export default App;