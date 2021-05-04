import React, {Component} from 'react';

class NewComponent extends Component{
    render(){
        return(
            <div>
                {this.props.name}
                {this.props.age}
                {this.props.hairColor}
            </div>
        );
    }
}

export default NewComponent;