/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useEffect, useState } from "react";

export const Message = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // @ts-ignore
    const onMouseMove = ({x, y}) => {
      setCoords({ x, y });
    };

    window.addEventListener("mouseover", onMouseMove);

    return () => {
      window.removeEventListener("mouseover", onMouseMove);
    };
  }, []);

  return (
    <>
      <h3>Usuario ya existe!</h3>
      <h4>{JSON.stringify(coords)}</h4>
    </>
  );
};
