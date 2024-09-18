import React from "react";
import { Modal } from "../lib/components/Modal";

const App = () => {
  return (
    <div style={{ width: 640, margin: "15px auto" }}>
      <h1>Hello React</h1>
      <Modal
        defaultState={modalBool}
        type={"success"}
        txt={"A new employee has just been created !"}
        stateUPDT={showModal}
      />
    </div>
  );
};

export default App;
