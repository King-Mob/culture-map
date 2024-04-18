import "../styles/app.css";
import React, { useEffect, useState } from "react";
import { getRoomRequest, sendEventRequest } from "../requests";

type recomendation = {
  like: string;
  might: string;
  because: string;
};

const App = () => {
  const [like, setLike] = useState("");
  const [might, setMight] = useState("");
  const [because, setBecause] = useState("");
  const [recommendations, setRecommendations] = useState<recomendation[]>([]);

  const getRecommendations = () => {
    getRoomRequest()
      .then((res) => res.json())
      .then((room) => {
        const linkEvents = room.chunk.filter(
          (event) => event.type === "culturemap.link"
        );
        const links = linkEvents.map((event) => event.content);
        setRecommendations(links);
      });
  };

  useEffect(() => {
    getRecommendations();
  }, []);

  const create = async () => {
    if (like && might && because) {
      await sendEventRequest(like, might, because);
      getRecommendations();
    }
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
