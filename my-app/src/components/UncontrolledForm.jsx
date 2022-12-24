import React, { Component } from 'react'

export class UncontrolledForm extends Component {
    constructor(props) {
        super(props)
        this.inputName = React.createRef();
        this.categorySelection = React.createRef();
        this.inputComments = React.createRef();
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.inputName.current.value)
        console.log(this.categorySelection.current.value)
        console.log(this.inputComments.current.value)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h2>Need Help? Let us know below!</h2>
                    <div>
                        <label htmlFor='id-name'>Your Name:</label>
                        <input
                            id='id-name'
                            name='name'
                            type='text'
                            ref={this.inputName} 
                        />
                    </div>
                    <div>
                        <label htmlFor='id-category'>Category:</label>
                        <select
                        id='id-category'
                        name='category'
                        ref={this.categorySelection}
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
                        ref={this.inputComments}
                        />
                    </div>
                    <input type='submit' value='Submit' />
                </form>
            </div>
        )
    }
}

export default UncontrolledForm