interface Todo {
    title: string;
    description: string;
    completed: boolean;
}
type myPick<T,K extends keyof T> = {
    [P in K]: T[K]
}
type TodoPreview = myPick<Todo,"title" | "completed">
const todo: TodoPreview = {
    title: 'dji',
    completed: false
}