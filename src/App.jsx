import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import posts from "./data/posts";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <header className="header">
        <div className="container">
          <h1>Blog</h1>
        </div>
      </header>
      <main>
        <section className="posts">
          <div className="container">
            <form>
              <input type="text" className="my-4 form-control" />
              <button className="btn btn-primary">Cerca</button>
            </form>
            <ul className="title-post-searched"></ul>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
