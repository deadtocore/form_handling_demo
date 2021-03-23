import React, { Component } from 'react';

class EventHandlerUsingClassComp extends Component {

    handleDoubleClickEvent() {
        alert("You Double Clicked That Button");
    }

    render() {
        return (
           <React.Fragment>
               <button className = 'btn btn-info ml-2' onDoubleClick = {this.handleDoubleClickEvent}>Double Click Here</button>
           </React.Fragment>
        );
    }
}

export default EventHandlerUsingClassComp;