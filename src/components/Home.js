import React, { Component } from 'react'
import ItemDiv from './ItemDiv'

export default class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            searchedposts: this.props.users[this.props.indexLoggedUser].posts
        }
    }

    searchTitle = (e) => {
        let title = e.target.value;
        if (title === '')
            this.setState({ searchedposts: this.props.users[this.props.indexLoggedUser].posts });
        else {
            let tempArr = this.props.users[this.props.indexLoggedUser].posts;
            let newSearchPosts = tempArr.filter(post => post.title.includes(title));
            this.setState({ searchedposts: newSearchPosts });
        }
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row paddingTop">
                        <div className="col-12">
                            <input onChange={this.searchTitle} placeholder="Search Title" className="styleInput"></input>
                        </div>
                    </div>
                </div>
                {
                    this.state.searchedposts.map((post, i) => {
                        return (<ItemDiv key={i} userPost={post} />)
                    })
                }
            </div>
        )
    }
}
