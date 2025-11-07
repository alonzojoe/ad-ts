import type { ITodo } from "../../../types/@types.todo";

export const ACTIONS = {
    ADD_TODO: "add-todo",
    REMOVE_TODO: "remove-todo",
    TOGGLE_TODO: "toggle-todo",
} as const;

type AddTodoPayload = {
    todo: ITodo
}

type RemoveToggleTodoPayload = Pick<ITodo, "id">

export type Action =
    | { type: typeof ACTIONS.ADD_TODO; payload: AddTodoPayload }
    | { type: typeof ACTIONS.REMOVE_TODO; payload: RemoveToggleTodoPayload }
    | { type: typeof ACTIONS.TOGGLE_TODO; payload: RemoveToggleTodoPayload }
