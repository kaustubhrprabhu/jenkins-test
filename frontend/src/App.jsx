import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [serverData, setServerData] = useState(null);

  const handleClick = async () => {
    try {
      const res = await fetch("/api/ping");
      const data = await res.json();

      if (res.ok) {
        setServerData(data);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <div>
        {serverData ? (
          <h1>{serverData.message}</h1>
        ) : (
          <h1>A Simple React JS Application</h1>
        )}
      </div>
      <button onClick={handleClick}>Ping Server</button>
    </div>
  );
}

export default App;
