type MyOmit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

// interface Todo {
//   title: string;
//   description: string;
//   completed: boolean;
// }

// type TodoPreview = MyOmit<Todo, 'description' | 'title'>;

// const todo: TodoPreview = {
//   completed: false,
// };
   