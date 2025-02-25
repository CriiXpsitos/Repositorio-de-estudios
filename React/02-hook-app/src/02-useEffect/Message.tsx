import { useEffect } from "react";

export const Message = () => {
  useEffect(() => {
    console.log("message mountend");
    return () => {
      console.log("message unmountend");
    };
  }, []);
  return (
    <>
      <h3>Usuario ya existe</h3>
    </>
  );
};
