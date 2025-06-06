import { useState } from "react";
import GooeyNav from "./GooeyNav/GooeyNav";
import "./filter.css";
type FilterProps = {
  material: string;
};

const filter: React.FC<FilterProps> = ({ material }) => {
  const [text, setText] = useState("");
  function handleChange(e: any) {
    setText(e.target.value);
  }

  const materials = material.split(" ");
  const safe: string[] = ["water, sodium", "salt", "potassium", "calcium", "calcite", "magnesium", "iron", "zinc", "chloride", "flouride"];
  //line below is what filters out stuff that isnt in the list above
  const safeMats = materials.filter((mat: string) => safe.includes(mat.toLowerCase()));
  const joinedSafeMats = safeMats.map((mat: string) => " " + mat);

  return (
    <div>
      <div className="box">
        <span className="filterButton" onClick={() => setText(`${joinedSafeMats}`)}>
          Filter
        </span>
        <i></i>
      </div>
      <p className="output" onChange={handleChange}>
        Safe Materials: {text}
      </p>
    </div>
  );
};

export default filter;
