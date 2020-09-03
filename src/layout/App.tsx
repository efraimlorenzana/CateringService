import React, { useEffect, useState } from "react";
import { dispatch } from "../store/dispatcher";
import { getHeader } from "../store/action/actions";
import { IHeader } from "./model/header";

const App = () => {
  const [header, setHeader] = useState<IHeader | null>(null);

  useEffect(() => {
    setHeader(dispatch(getHeader()).header);
  }, []);

  if (header === null) return <h1>Loading...</h1>;
console.log("header", header);
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello World</h1>
      </header>
    </div>
  );
};

export default App;
