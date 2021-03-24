import React, { useState } from "react";

function EventHandlingUsingHook() {
  let [buttonName, setButtonName] = useState("Subscribe");
  let [message, setMessage] = useState("Please Hit That Subscribe Button");

  function handleEvent() {
    if (buttonName === "Subscribe") {
      setButtonName("Unsubscribe");
      setMessage("Thank You For Subscribing !");
    } else {
      setButtonName("Subscribe");
      setMessage("Please Hit That Subscribe Button");
    }
  }

  return (
    <React.Fragment>
      <h1 className="text-primary mt-3">Welcome To Hook</h1>
      <hr />
      <h3 className="text-info">{message}</h3>
      <button onClick={() => handleEvent()} className="btn btn-success mt-2">
        {buttonName}
      </button>
    </React.Fragment>
  );
}

export default EventHandlingUsingHook;
