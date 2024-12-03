import { useState } from "react";
import reactLogo from "./assets/react.svg";

function App() {
  const [addName, setAddName] = useState("");

  const [posts, setPosts] = useState(["html", "css"]);

  const handleInputChange = (e) => {
    setAddName(e.target.value);
    //console.log(e);
  };

  const handlerFormSubmit = (e) => {
    e.preventDefault();
  };

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
            <form onSubmit={handlerFormSubmit}>
              <input
                type="text"
                className="my-4 form-control"
                value={addName}
                onChange={handleInputChange}
              />
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
