import { useRef } from "react";



export const FocusScreen = () => {

    const inputRef = useRef<HTMLInputElement>(null)


    const handleFocusClick = () => {
        inputRef.current?.select()
    }
  return (
    <>
      <h1>Focus screen</h1>
      <hr />

      <input
        type="text"
        placeholder="Ingrese su nombre"
        className="form-control"
        ref={inputRef}
      />

      <button onClick={handleFocusClick} className="btn btn-primary mt-2"  >Set focus</button>
    </>
  );
};
