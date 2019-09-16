import React from 'react'

export default function MyAccount(props) {
    return (
        <div className="container">
            <div className="row">
                <div style={{ marginTop: "20px" }} className="col-12 mx-auto">
                    <img className="picStyle" src={require(`../pics/${props.users[props.indexLoggedUser].img}`)} alt="" />
                </div>
            </div>
            <div className="row form mx-auto">
                <div className="col-12">
                    <table className="mx-auto">
                        <tbody>
                            <tr>
                                <td>
                                    <h3 className="marginAccount">User name: </h3>
                                </td>
                                <td className="">
                                    <h3>{props.users[props.indexLoggedUser].userName}</h3>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h3 className="marginAccount">Age: </h3>
                                </td>
                                <td className="">
                                    <h3>{props.users[props.indexLoggedUser].age}</h3>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h3 className="marginAccount">Address: </h3>
                                </td>
                                <td className="">
                                    <h3>{props.users[props.indexLoggedUser].address}</h3>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    )
}
