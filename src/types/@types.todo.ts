
export interface ITodo {
    id: number;
    title: string;
    completed: boolean;
}

export interface ITodoContext {
    todos: ITodo[];
    addTodo: (todo: ITodo) => void;
    deleteTodo: (id: number) => void;
    toggleTodo: (id: number) => void;
}