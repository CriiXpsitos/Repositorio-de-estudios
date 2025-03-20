import { memo } from "react";

export const Small = memo(({ value }: { value: number }) => {
  console.log("me volvi a dibujar :C");

  return <small>{value}</small>;
});
