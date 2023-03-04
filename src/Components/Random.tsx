import { useState } from "react";
import { Random_API, API_KEY, URL } from "./APi";
interface AstroidInfo {
  name: string;
  nasa_jpl_url: string;
  is_potentially_hazardous_asteroid: boolean;
}
const Random = () => {
  const [randomAstroid, setRandomAstroid] = useState<AstroidInfo | null>(null);
  const handleRandom = async () => {
    const res = await fetch(`${Random_API}api_key=${API_KEY}`);
    const data = await res.json();
    const id = data[Math.floor(Math.random() * data.length)];

    const response = await fetch(`${URL}{${id}}?api_key={${API_KEY}}`);
    const val = await response.json();

    console.log(val);

    setRandomAstroid({
      name: val.name,
      nasa_jpl_url: val.nasa_jpl_url,
      is_potentially_hazardous_asteroid: val.is_potentially_hazardous_asteroid
    });
  };

  return (
    <div>
      <button onClick={handleRandom}>Random Astroid</button>
      <div>
        {randomAstroid && (
          <div>
            <h1>name:{randomAstroid.name}</h1>
            <h1>nasa_jpl_url:{randomAstroid.nasa_jpl_url}</h1>
            <h1>name:{randomAstroid.is_potentially_hazardous_asteroid}</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default Random;
