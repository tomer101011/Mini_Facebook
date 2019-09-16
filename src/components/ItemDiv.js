import React from 'react'

export default function ItemDiv(props) {
    return (
        <div>
            <div className="container">
                <div className="row paddingTop">
                    <div className="col-3"></div>
                    <div className="col-6">
                        <table className="table table-warning">
                            <tbody>
                                <tr>
                                    <td><img className="postPicStyle" src={require(`../pics/${props.userPost.img}`)} alt="" /></td>
                                    <td><h3>{props.userPost.info}</h3></td>
                                    <td><h3>{props.userPost.title}</h3></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="col-3"></div>
                </div>
            </div>
        </div>
    )
}
