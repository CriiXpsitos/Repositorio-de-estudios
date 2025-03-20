export const ShowIncrement = ({ increment }: { increment: () => void }) => {
  console.log("Me volví a generar :C");

  return (
    <button className="btn btn-primary" onClick={() => increment()}>
      incrementar
    </button>
  );
};
