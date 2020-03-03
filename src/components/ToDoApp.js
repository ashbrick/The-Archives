import React, { useState } from 'react';


const ToDoApp = () => {

    return (
        <header>
            <form id="to-dos">
                <input type="text" placeholder="Your to-do goes here..."></input>
                <button type="submit">Add</button>
            </form>
        </header>
    )
}

export default ToDoApp;
