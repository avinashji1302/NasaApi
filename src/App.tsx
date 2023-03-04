import "./styles.css";
import InputField from "./Components/InputField";
import React, { useState } from "react";
import { URL, API_KEY } from "./Components/APi";
import Random from "./Components/Random";
export default function App() {
  interface AstroidInfo {
    name: string;
    nasa_jpl_url: string;
    is_potentially_hazardous_asteroid: boolean;
  }
  const [id, setId] = useState<number | null>(null);
  const [astroid, setAstroid] = useState<AstroidInfo | null>(null);
  // const [randomAstoid, setRandomAstroid] = useState(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch(`${URL}{${id}}?api_key=${API_KEY}`);
    const data = await res.json();

    console.log(data);

    setAstroid({
      name: data.name,
      nasa_jpl_url: data.nasa_jpl_url,
      is_potentially_hazardous_asteroid: data.is_potentially_hazardous_asteroid
    });
  };
  return (
    <div className="App">
      <h1>Nasa Infromation</h1>
      <InputField id={id} setId={setId} handleSubmit={handleSubmit} />
      <Random />

      {astroid && (
        <div>
          <h1>name:{astroid.name} </h1>
          <h1>url:{astroid.nasa_jpl_url} </h1>
          <h1>name:{astroid.is_potentially_hazardous_asteroid} </h1>
        </div>
      )}
    </div>
  );
}
