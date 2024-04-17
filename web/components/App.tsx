import "../styles/app.css";
import React, { useEffect, useState } from "react";

const recommendations = [
  {
    like: "NTS radio",
    might: "Noods radio",
    because: "they play amazingly varied music",
  },
  {
    like: "American Fiction",
    might: "Dreaming While Black",
    because:
      "there are similar themes of black creatives being boxed in by creative industries",
  },
  {
    like: "Dune 2",
    might: "The Real And The Unreal",
    because: "they're grand sci-fi but it melts you",
  },
];

const App = () => {
  const [like, setLike] = useState("");
  const [might, setMight] = useState("");
  const [because, setBecause] = useState("");

  useEffect(() => {
    fetch("https://matrix.wobbly.app/_matrix/client/v3/");
    //get the existing recommendations from the room
  }, []);

  const create = () => {
    console.log(like, might, because);
    //send a new recommendation to the room
  };

  return (
    <>
      <h1>Recommendations</h1>
      <div id="statement-container">
        <p>If you like </p>
        <input
          type="text"
          placeholder="this piece of culture"
          value={like}
          onChange={(e) => setLike(e.target.value)}
        ></input>
        <p> you might like </p>
        <input
          type="text"
          placeholder="another piece of culture"
          value={might}
          onChange={(e) => setMight(e.target.value)}
        ></input>
        <p> because </p>
        <input
          type="text"
          placeholder="they have some kind of connection"
          value={because}
          onChange={(e) => setBecause(e.target.value)}
        ></input>
      </div>
      <button onClick={create}>Create recomendation</button>
      <h2>Previous Recomendations</h2>
      <ul>
        {recommendations.map((rec) => (
          <li>
            <p>
              If you like {rec.like}, you might like {rec.might}, because{" "}
              {rec.because}
            </p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default App;
