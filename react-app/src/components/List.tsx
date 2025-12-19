import { useState } from "react";

type Props = {
  data: string[];
}

function List({ data }: Props) {
    const [index, setState]  = useState(1);
    const handleClick = (i: number) => {
      setState(i); 
    }
  return (
    <ul className="list-group">
       {data.map((elemento, i) => (
        <li 
          onClick={() => handleClick(i)} 
          key={elemento} 
          className={`list-group-item ${index == i ? "active" : ""}`}
        >
          {elemento}
        </li>
       ))}
    </ul>
  );
}

export default List
