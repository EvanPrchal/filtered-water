import { useState } from "react";
import "./App.css";
import Filter from "./Filter";
import LiquidChrome from "./LiquidChrome/LiquidChrome";
import PixelTrail from "./PixelTrail/PixelTrail";

function App() {
  const [unfilt, setUnfilt] = useState("");

  return (
    <div>
      <div className="chrome" style={{ width: "100%", height: "1000px", position: "relative" }}>
        <LiquidChrome baseColor={[0.1, 0.2, 0.25]} speed={0.2} amplitude={0.25} interactive={false} />
      </div>
      <section className="middle">
        <div className="inputarea">
          <section className="inputtext">
            <h1>Input Materials of</h1>
            <h1 className="water">Water</h1>
          </section>
          <section>
            <div className="content"></div>
          </section>
          <h2>(Separated by Spaces)</h2>
          <input type="text" value={unfilt} onChange={(e) => setUnfilt(e.target.value)} />
        </div>
        <Filter material={unfilt} />
      </section>
    </div>
  );
}

export default App;
