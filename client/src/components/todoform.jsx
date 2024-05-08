import React, { useState } from 'react';

const TodoForm = () => {
    const [text, setText] = useState("");

    const onFormSubmit = (e) => {
        // Your form submission logic here
    }

    const onInputChange = (e) => {
        setText(e.target.value);
    }

    return (
        <form className='form' onSubmit={onFormSubmit}>
            <input
                type="text"
                placeholder="Enter TO-DO list"
                className="input"
                value={text}
                onChange={onInputChange}
            />
        </form>
    );
}

export default TodoForm;
