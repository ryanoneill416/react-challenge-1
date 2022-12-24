import React, { Component } from 'react'

export class ControlledForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            category: 'website',
            comments: ''
        }
    }

    handleNameField = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handleCategorySelect = (event) => {
        this.setState({
            category: event.target.value
        })
    }

    handleCommentField = (event) => {
        this.setState({
            comments: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h2>Need Help? Let us know below!</h2>
                    <div>
                        <label htmlFor='id-name'>Your Name:</label>
                        <input
                            value={this.state.name}
                            onChange={this.handleNameField}
                            id='id-name'
                            name='name'
                            type='text' 
                        />
                    </div>
                    <div>
                        <label htmlFor='id-category'>Category:</label>
                        <select
                        id='id-category'
                        name='category'
                        value={this.state.category}
                        onChange={this.handleCategorySelect}
                        >
                            <option value='website'>Website support</option>
                            <option value='order'>Order support</option>
                            <option value='general'>General support</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="id-comments">Comments:</label>
                        <textarea
                        id='id-comments'
                        name='comments'
                        value={this.state.comments}
                        onChange={this.handleCommentField}
                        />
                    </div>
                    <input type='submit' value='Submit' />
                </form>
            </div>
        )
    }
}

export default ControlledForm