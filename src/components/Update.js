import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

export default class Update extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            age: '',
            address: '',
            done: false
        }
    }

    changeUserNameUpdate = (e) => {
        this.setState({ userName: e.target.value, age: this.state.age, address: this.state.address });

    }

    changeAgeUpdate = (e) => {
        this.setState({ userName: this.state.userName, age: e.target.value, address: this.state.address });
    }

    changeAddressUpdate = (e) => {
        this.setState({ userName: this.state.userName, age: this.state.age, address: e.target.value });
    }

    doUpdate = () => {
        this.props.updateUser(this.state.userName, this.state.age, this.state.address);
        this.setState({ done: true });
    }

    redirectToUserPage = () => {
        if (this.state.done)
            return <Redirect to={'/MyAccount'} />
    }

    render() {
        return (
            <div>
                {this.redirectToUserPage()}
                <div className="container">
                    <div className="form mx-auto">
                        <div className="row">
                            <div className="col-12">
                                <h3 style={{ textAlign: "center", cursor: "default" }}>Update user</h3>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <table className="mx-auto">
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div className="inputLogin">
                                                    <table>
                                                        <tbody>
                                                            <tr>
                                                                <td><i className="fa fa-user "></i></td>
                                                                <td><input id="userLog" onChange={this.changeUserNameUpdate} type="text" className="loginText" placeholder="Enter new user name" /></td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="inputLogin">
                                                    <table>
                                                        <tbody>
                                                            <tr>
                                                                <td><i className="fa fa-user "></i></td>
                                                                <td><input id="userLog" onChange={this.changeAgeUpdate} type="text" className="loginText" placeholder="Enter new age" /></td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="inputLogin">
                                                    <table>
                                                        <tbody>
                                                            <tr>
                                                                <td><i className="fa fa-user "></i></td>
                                                                <td><input id="userLog" onChange={this.changeAddressUpdate} type="text" className="loginText" placeholder="Enter new address" /></td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <button style={{ marginLeft: "8px" }} onClick={this.doUpdate} type="button" className=" log">Update user</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}
