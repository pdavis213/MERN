import React, {Component} from 'react';

class NewComponent extends Component{
    render(){
        return(
            <div>
                <h1>{this.props.last_name}, {this.props.first_name}</h1>
                <p>Age: {this.props.age}</p>
                <p>Hair Color: :this.props.hairColor</p>
            </div>
        );
    }
}

export default NewComponent;