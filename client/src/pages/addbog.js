import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import './style.css';

function AddBlog() {
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const [submitMessage, setSubmitMessage] = useState('');

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleTextChange = (e) => {
        setText(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://127.0.0.1:8000/api/blogs/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    // Add any additional headers as needed
                },
                body: JSON.stringify({ title, text }),
            });

            if (response.ok) {
                setSubmitMessage('Success! Blog submitted.');
                // Reset the form
                setTitle('');
                setText('');
            } else {
                setSubmitMessage('Failure! Blog submission failed.');
            }
        } catch (error) {
            console.error('Error submitting blog:', error);
            setSubmitMessage('Failure! Something went wrong.');
        }
    };

    return (
        <div className="max-w-2xl mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4">Add Blog</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <TextField
                    id="title"
                    label="Title"
                    value={title}
                    onChange={handleTitleChange}
                    className="w-full"
                    margin='dense'
                />

                <TextField
                    id="text"
                    label="Text"
                    multiline
                    variant="standard"
                    rows={4}
                    value={text}
                    onChange={handleTextChange}
                    className="w-full"
                    margin='dense'
                />

                <button
                    type="submit"
                    className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
                >
                    Submit
                </button>

                {submitMessage && (
                    <p className={`mt-4 ${submitMessage.includes('Success') ? 'text-green-600' : 'text-red-600'}`}>
                        {submitMessage}
                    </p>
                )}
            </form>
        </div>
    );
}

export default AddBlog;



