import React, {Component} from 'react';

export default class TaskForm extends Component {

    state = {
        title: '',
        description: ''
    }

    submit = e => {
        this.props.addingTask(this.state.title, this.state.description);
        // console.log(this.state);
        e.preventDefault();
    }

    change = e =>{
        // console.log(e.target.name, e.target.value);
        this.setState({            
            [e.target.name]: e.target.value
        });
    }
    render(){               
        return(
            <form onSubmit={this.submit}>
                <input type="text" placeholder="Write a Task" onChange={this.change} name="title" value={this.state.title}/>
                <br/>
                <textarea placeholder="Write a Description" onChange={this.change} name="description" value={this.state.description}></textarea>
                <input type="submit" />
            </form>
        ) 
    }
}
