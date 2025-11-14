import type { Route } from "../context/todo/types/types"

export const Routes: Route[] = [
    {
        id: 1,
        path: "",
        name: 'Home'
    },
    {
        id: 2,
        path: "/todos",
        name: 'Todos'
    },
    {
        id: 3,
        path: "/settings",
        name: 'Settings'
    },
    {
        id: 4,
        path: "/conditionals",
        name: 'Conditionals'
    },
]