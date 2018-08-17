import { ID } from '@datorama/akita'

let id = 1;

export type Todo = {
    id: ID,
    title: string,
    completed: boolean
}

export function createTodo({title}: Partial<Todo>) {
    return {
        id: id++,
        title,
        completed: false
    } as Todo;
}