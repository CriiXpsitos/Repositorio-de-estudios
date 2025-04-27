import {
  FormEvent,
  memo,
  useCallback,
  useTransition,
} from "react";
import { Todo } from "../interfaces/todo";
import { useForm } from "../../hooks/useForm";

interface Props {
  handleNewTodo: (todo: Todo) => void;
}

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const TodoAdd = memo(({ handleNewTodo }: Props) => {
  const [isPending, startTransition] = useTransition();

  const {formState, onInputChange, onResetForm} = useForm({
    description: ""
  });

  const {description} = formState 

  const onSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      startTransition(async () => {
        e.preventDefault();
        if (description.length < 1) return;

        const newTodo: Todo = {
          id: new Date().getTime() * 3,
          description: description,
          done: false,
        };

        await sleep(2000);

        handleNewTodo(newTodo);
        onResetForm();
      });
    },
    [handleNewTodo, onResetForm, description]
  );

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        name="description"
        id="description"
        value={description}
        onChange={onInputChange}
        disabled={isPending}
        placeholder="¿Qué hay que hacer?"
        className="form-control"
      />

      <button
        disabled={isPending || description.length < 1}
        type="submit"
        className="btn btn-outline-primary mt-1"
      >
        Agregar
      </button>
    </form>
  );
});
