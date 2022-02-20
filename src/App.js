import React from "react";
import { store } from "./Countries2";
import { Provider } from "react-redux";
import Countries from "./Countries";
import Countries1 from "./Countries1";
import Countries2 from "./Countries2";

function App() {
  return (
    <>
      <Countries />
      <Countries1 />
      <Provider store={store}>
        <Countries2 />
      </Provider>
    </>
  );
}

export default App;
