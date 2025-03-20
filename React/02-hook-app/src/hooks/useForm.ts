import { ChangeEvent, useState } from "react";

// Definir el hook con tipado genérico
export const useForm = <T extends Record<string, unknown>>(initialForm: T) => {
  const [formState, setFormState] = useState<T>(initialForm);

  const onInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setFormState({
      ...formState,
      [target.name]: target.value,
    });
  };

  const onResetForm = () => setFormState(initialForm);
  

  return {
    formState, // Mantener el objeto completo si es necesario
    onInputChange,
    onResetForm
  };
};