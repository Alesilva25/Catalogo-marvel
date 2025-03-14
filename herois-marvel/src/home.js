import { useEffect, useState } from "react";
import { getCharacters } from "../services/api";

export default function Home() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getCharacters().then(setCharacters);
  }, []);

  return (
    <div>
      <h1>Marvel Heroes</h1>
      <ul>
        {characters.map((char) => (
          <li key={char.id}>{char.name}</li>
        ))}
      </ul>
    </div>
  );
}
