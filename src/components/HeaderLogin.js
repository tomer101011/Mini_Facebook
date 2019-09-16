import React from 'react'
import { Link } from 'react-router-dom'

export default function HeaderLogin(props) {
    return (
        <div style={{ display: props.displayHeader }} className="container-fluid headerForm ">
            <div className="row">
                <div className="col-12">
                    <table className="mx-auto">
                        <tbody>
                            <tr>
                                <td>
                                    <Link title="Home" to="/Home"><img id="svFaceStyle" src={require('../pics/svFacebook.png')} alt="" /></Link>
                                </td>
                                <td style={{ paddingRight: "20px" }}>
                                    <Link style={{ textDecoration: "none" }} className="linkStyle" to="/MyAccount">My Account</Link>
                                </td>
                                <td style={{ paddingRight: "20px" }}>
                                    <Link style={{ textDecoration: "none" }} className="linkStyle" to="/Update">Update Account</Link>
                                </td>
                                <td style={{ paddingRight: "20px" }}>
                                    <Link onClick={()=>props.setDisplayHeader('none')} style={{ textDecoration: "none" }} className="linkStyle" to="/">Logout</Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    )
}
