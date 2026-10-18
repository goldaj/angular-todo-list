export interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

export function createTodo(): Todo {
    return {
        userId: 1,
        id: null,
        title: '',
        completed: false
    };
}
