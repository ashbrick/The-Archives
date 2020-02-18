import React, { Component } from 'react'

class ToDoList extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = { items: [], text: '' };
    //     this.handleChange = this.handleChange.bind(this);
    //     this.handleSubmit = this.handleSubmit.bind(this);
    // }

    render() {
        return (
            <div>
                <h3>New To-Do</h3>
                <ToDoList items = {this.state.items} />
                <form onSubmit = {this.handleSubmit}>
                    <label htmlFor="new-todo">
                        Enter new to-do item...
                    </label>
                    <input
                        id="new-todo"
                        onChange={this.handleChange}
                        value={this.state.text}
                    />
                    <button>
                        Add
                    </button>
                </form>
            </div>
        );
    }

    handleChange(e) {
        this.setState({ text: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        if (!this.state.text.length) {
            return;
        }
        const newItem = {
            text: this.state.text,
            id: Date.now()
        };
        this.setState(state => ({
            items: state.items.concat(newItem),
            text: ''
        }));
    }

}

// class ToDoItems extends Component {
//     render() {
//         return (
//             <ul>
//                 {this.props.items.map(item => (
//                     <li key={item.id}>{item.text}</li>
//                 ))}
//             </ul>
//         );
//     }
// }


export default ToDoList;
// export default ToDoItems;
