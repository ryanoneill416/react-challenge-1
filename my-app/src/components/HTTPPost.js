import React, { Component } from 'react'
import axios from 'axios';

export class HTTPPost extends Component {
    constructor(props) {
        super(props)

        this.state = {
            apiResponse: null
        }
    }

    postToApi = () => {
        axios.post(
            'https://jsonplaceholder.typicode.com/posts',
            {
                title: 'Hello world',
                body: 'It works ;)',
                userId: 101,
            }
        ).then(response => {
            this.setState({
                apiResponse: response.data
            })
        })
    }

    render() {
        const {apiResponse} = this.state
        return (
            <div>
                {
                    apiResponse
                    ? (
                        <div>
                            <h1>{apiResponse.title}</h1>
                            <p>Post ID: {apiResponse.id}</p>
                            <p>User ID: {apiResponse.userId}</p>
                        </div>
                    ) : (
                        <p>Click below!</p>
                    )
                }
                <button onClick={this.postToApi}>
                    Create Post
                </button>
            </div>
        )
    }
}

export default HTTPPost