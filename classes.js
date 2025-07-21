
class User {
    constructor(name, age){
      this.name = name;
      this.age = age;
    }

    greet(){
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`)
    }
}

// class User {
//   name: string;
//   age: number;

//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }

//   greet(): void {
//     console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
//   }
// }


class User1{
    constructor(name, email){
        this.name = name;
        this.email = email;
    }
}

class Admin extends User1 {
    constructor(name, email, role){
        super(name, email);
       this.role = role;
    }
    isAdmin(){
       return this.role === 'admin';
    }
}


class BankAccount{
    #balance;
    constructor(initialBalance){
        this.#balance = initialBalance;
    }

    deposit(amount){
        if(amount <= 0){
            throw new Error("Deposit amount must be positive number!");
        
        }
        this.#balance += amount;
    }

    withdraw(amaount){
        if(amaount > this.#balance){
            throw new Error("Insufficient funds!");
        }
        this.#balance -= amaount;
    }

    getBalance(){
        return this.#balance;
    }
}


class TodoList {
    constructor(){
        this.todos = [];
        this.nextId = 1;
    }

    addTodo(title){
        const newTodo = {
            id: this.nextId ++,
            title
        };
        this.todos.push(newTodo);
    }

    removeTodo(id){
        this.todos = this.todos.filter(todo => todo.id !== id);
    }

    listTodos(){
        return this.todos;
    }
}

const myTodos = new TodoList();

myTodos.addTodo("Learn JavaScript");
myTodos.addTodo("Practice coding");
myTodos.addTodo("Build a project");

console.log("All todos:", myTodos.listTodos());

myTodos.removeTodo(2); // remove "Practice coding"

console.log("After removal:", myTodos.listTodos());

// type Todo = {
//   id: number;
//   title: string;
// };

// class TodoList {
//   private todos: Todo[] = [];
//   private nextId: number = 1;

//   addTodo(title: string): void {
//     const newTodo: Todo = {
//       id: this.nextId++,
//       title
//     };
//     this.todos.push(newTodo);
//   }

//   removeTodo(id: number): void {
//     this.todos = this.todos.filter(todo => todo.id !== id);
//   }

//   listTodos(): Todo[] {
//     return this.todos;
//   }
// }

// const myTodos = new TodoList();

// myTodos.addTodo("Learn TypeScript");
// myTodos.addTodo("Build a To-Do App");

// console.log("Todos:", myTodos.listTodos());

// myTodos.removeTodo(1);

// console.log("After removal:", myTodos.listTodos());