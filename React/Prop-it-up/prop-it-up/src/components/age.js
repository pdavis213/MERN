import React, { Component } from 'react';
                
                
class Birthday extends Component {
    constructor(props) {
        super(props);
        this.setState = {
//             position: "On"
//         };
//         age = () => {
//                 if( this.state.position === "On" ) {
//                     this.setState({ position: "Off" });
//                 } else {
//                     this.setState({ position: "On" });
//                 }
//             }
//     }
    render() {
        return (
            <fieldset>
                <button onClick={this.age}>Happy Birthday</button>
            </fieldset>
        );
    }
}
                
export default Birthday;
