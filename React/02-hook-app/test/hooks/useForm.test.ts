import { act, renderHook } from "@testing-library/react";
import { useForm } from "../../src/hooks/useForm";
import { ChangeEvent } from "react";

describe("pruebas en el useForm", () => {
  const initialForm = {
    name: "Cristian peña",
    email: "cristianpee2609@gmail.com",
  };

  test("debe de regresar los valores por defecto", () => {
    const { result } = renderHook(() => useForm(initialForm));

    expect(result.current).toEqual({
        // name: initialForm.name,
        // email: initialForm.email,
        formState: initialForm,
        onInputChange: expect.any(Function),
        onResetForm: expect.any(Function),

    })
  });

  test("debe de cambiar el nombre del formulario", () => {
    const {result} = renderHook(() => useForm(initialForm))
    const {onInputChange} = result.current
    const newValue = "Cristian Peña"
    const event = {
      target: {
        name: "name",
        value: newValue,
      }
    }
    act(() => {
        onInputChange(event as ChangeEvent<HTMLInputElement>)
    })

    expect(result.current.formState.name).toBe(newValue)
  })
  test("debe de hacer el reset del formulario", () => {
    const {result} = renderHook(() => useForm(initialForm))
    const {onInputChange, onResetForm} = result.current
    const newValue = "Cristian Peña"
    const event = {
      target: {
        name: "name",
        value: newValue,
      }
    }
    act(() => {
        onInputChange(event as ChangeEvent<HTMLInputElement>)
        onResetForm()
    })

    // expect(result.current.formState.name).toBe(newValue)
    expect(result.current.formState.name).toBe(initialForm.name)
  })
});
