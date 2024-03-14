import { Fragment } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import data from "./data";

function App() {
  return (
    <div className="container">
      <Navbar />
      <main>
        {data.map((info) => (
          <Fragment key={Math.random()}>
            <Card key={info.title} {...info} />
            {data.indexOf(info) !== data.length - 1 && (
              <hr key={Math.random()} />
            )}
          </Fragment>
        ))}
      </main>
    </div>
  );
}

export default App;
