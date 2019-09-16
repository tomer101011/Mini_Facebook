import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

export default class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userNameLogin: '',
            passwordLogin: '',
            isLoggedIn: false
        }
    }

    redirectToUserPage = () => {
        if (this.state.isLoggedIn)
            return <Redirect to={'/Home'} />
    }

    changeUserNameLogin = (e) => {
        this.setState({ userNameLogin: e.target.value, passwordLogin: this.state.passwordLogin });

    }

    changePasswordLogin = (e) => {
        this.setState({ userNameLogin: this.state.userNameLogin, passwordLogin: e.target.value });
    }

    login = () => {
        if (this.state.userNameLogin === '' || this.state.passwordLogin === '') {
            if (this.state.userNameLogin === '')
                document.getElementById('validNameLog').style.display = 'block';
            else
                document.getElementById('validNameLog').style.display = 'none';

            if (this.state.passwordLogin === '')
                document.getElementById('validPasswordLog').style.display = 'block';
            else
                document.getElementById('validPasswordLog').style.display = 'none';
        }
        else {
            //search for the user on the database
            let found = false;
            for (let i = 0; i < this.props.users.length && !found; i++) {
                if (this.props.users[i].userName === this.state.userNameLogin && this.props.users[i].password === this.state.passwordLogin) {
                    this.props.changeIndexLoggedUserState(i);
                    this.setState({ isLoggedIn: true });
                    this.props.setDisplayHeader('block');
                    found = true;
                }
            }
            if (!found)
                alert('User name or password are incorrect');
        }
    }

    render() {

        return (
            <div className="container">
                {this.redirectToUserPage()}
                <div className="row form mx-auto">
                    <div className="col-6">
                        <img className="leftSideImg" onClick={this.login} title="Login" src={require('../pics/loginPic.png')} alt="" />
                    </div>
                    <div className="col-6">
                        <div className="row">
                            <div className="col-12">
                                <h3 style={{ textAlign: "center", cursor: "default" }}>Mini Facebook login</h3>
                            </div>
                        </div>
                        <div className="row rowLoginStyle">
                            <div className="col-12">
                                <table>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div className="inputLogin">
                                                    <table>
                                                        <tbody>
                                                            <tr>
                                                                <td><i className="fa fa-user "></i></td>
                                                                <td><input id="userLog" onChange={this.changeUserNameLogin} type="text" className="loginText" placeholder="Enter user name" /></td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <p id='validNameLog'>You must enter a user name</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="inputLogin">
                                                    <table>
                                                        <tbody>
                                                            <tr>
                                                                <td><i className="fa fa-lock "></i></td>
                                                                <td><input id="passLog" onChange={this.changePasswordLogin} type="password" className="loginText" placeholder="Enter password" /></td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <p id='validPasswordLog'>You must enter a password</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <button onClick={this.login} type="button" className=" log">Login</button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                </div>
            </div>


        )
    }
}
