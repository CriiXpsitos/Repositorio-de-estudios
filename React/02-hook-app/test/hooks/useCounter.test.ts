import { renderHook } from "@testing-library/react";
import { useCounter } from "../../src/hooks/useCounter";

describe("Pruebas en el useCounter", () => {
  test("debe de retornar los valores por defecto", () => {
    const { result } = renderHook(() => useCounter());
    const { counter, increment, decrement, reset } = result.current;

    expect(counter).toBe(10);
    expect(decrement).toEqual(expect.any(Function))
    expect(increment).toEqual(expect.any(Function))

  });

  
  test("debe de tener el counter en 100", () => {
    const { result } = renderHook(() => useCounter(100));
    const { counter } = result.current;

    expect(counter).toBe(100);
  })


  test("debe incrementar el contador", () => {
    const { result } = renderHook(() => useCounter());
    const { counter, increment, decrement, reset } = result.current;


    expect(counter).toBe(11)
  })
});
