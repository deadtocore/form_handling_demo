import React from 'react';

function EventHandlerUsingFunctionalComp() {

    function handleClickEvent() {
        alert("You Have Pressed That Button");
    }
    return (
        <React.Fragment>
            <hr/>
            <button className = 'btn btn-primary' onClick = {handleClickEvent} >Press Here</button>
        </React.Fragment>
    );
}

export default EventHandlerUsingFunctionalComp;