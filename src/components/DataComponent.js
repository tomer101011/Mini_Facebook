import React, { Component } from 'react'
import { User, Post } from '../classes/User'
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './Login.js';
import Home from './Home.js';
import Update from './Update.js';
import MyAccount from './MyAccount.js';
import HeaderLogin from './HeaderLogin';



export default class DataComponent extends Component {
    constructor(props) {
        super(props);
        let posts1 = [new Post('aaa', 'bbb', 'cod.jpg'), new Post('ccc', 'ddd', 'dbh.jpeg'), new Post('cb', 'ddd', 'bf2.jpeg')]
        let posts2 = [new Post('ccc', 'ddd', 'gots.jpg'), new Post('eee', 'fff', 'los.jpeg'), new Post('cab', 'ddd', 'bf.jpeg')]
        this.state = {
            users: [new User('tomer', '1234', '26', '5th street', 'me.jpg', posts1),
            new User('ram', '4444', '58', '8th street', 'swtor.jpg', posts2)],
            indexLoggedUser: -1,
            displayHeader: 'none'
        }
    }

    changeIndexLoggedUserState = (index) => {
        this.setState({ indexLoggedUser: index });
    }

    updateUser = (userName, age, address) => {
        let tempUsers = this.state.users;
        tempUsers[this.state.indexLoggedUser].userName = userName;
        tempUsers[this.state.indexLoggedUser].age = age;
        tempUsers[this.state.indexLoggedUser].address = address;
        this.setState({ users: tempUsers });
        alert('Update was a success!');
    }

    setDisplayHeader = (newDisplayHeaderState) => {
        this.setState({ displayHeader: newDisplayHeaderState });
    }

    render() {
        return (
            <div>
                <HashRouter>
                    {/*How to vanish header if not logged in?*/}
                    {/*Else logged in and show header*/}
                    <HeaderLogin setDisplayHeader={this.setDisplayHeader} displayHeader={this.state.displayHeader} />

                    <Switch>
                        <Route exact path='/' render={(props) => <Login {...props} setDisplayHeader={this.setDisplayHeader} users={this.state.users} changeIndexLoggedUserState={this.changeIndexLoggedUserState} />} />
                        <Route exact path='/Update' render={(props) => <Update {...props} users={this.state.users} updateUser={this.updateUser} indexLoggedUser={this.state.indexLoggedUser} />} />
                        <Route exact path='/Home' render={(props) => <Home {...props} users={this.state.users} indexLoggedUser={this.state.indexLoggedUser} />} />
                        <Route exact path='/MyAccount' render={(props) => <MyAccount {...props} users={this.state.users} indexLoggedUser={this.state.indexLoggedUser} />} />
                    </Switch>

                </HashRouter>
            </div>
        )
    }
}
