import React, {useState} from 'react'

function ControlledFormHooks() {
    const [name, setName] = useState('');
    const [category, setCategory] = useState('website');
    const [comments, setComments] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, category, comments);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h2>Need Help? Let us know below!</h2>
                <div>
                    <label htmlFor='id-name'>Your Name:</label>
                    <input
                        value={name}
                        onChange={
                            (e) => setName(e.target.value)
                        }
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
                    value={category}
                    onChange={
                        (e) => setCategory(e.target.value)
                    }
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
                    value={comments}
                    onChange={
                        (e) => setComments(e.target.value)
                    }
                    />
                </div>
                <input type='submit' value='Submit' />
            </form>
        </div>
    )
}

export default ControlledFormHooks