import React, {Component} from 'react';

class NewComponent extends Component{
    constructor(props) {
        super(props);
        this.state = {
            incrementAge : props.age
        };
    }

    bday = () => {
        // console.log(this.state.incrementAge)
            this.setState(
                {
                incrementAge: this.state.incrementAge +1
            }
        )
    }

    render(){
        return(
            <div>
                <h1>{this.props.last_name}, {this.props.first_name}</h1>
                <p>Age: {this.state.incrementAge}</p>
                <p>Hair Color: {this.props.hairColor}</p>
                <button onClick = {this.bday}>Happy Birthday!</button>
            </div>
            );
        }
    }

export default NewComponent;