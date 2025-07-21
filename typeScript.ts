const user: {name: string; age: number; isAdmin: boolean} = {
  name: "Maria",
  age: 25,
  isAdmin: false,
};

function greet(name: string) : string{
  return `Hello, ${name}!`;
}

function getAvarage(numbers: number[]): number{
  const total = numbers.reduce((sum, num) => sum + num, 0);
  return total / numbers.length;
}

type Product = {
    id: number;
    title: string;
    price: number;
}


const item: Product = {
  id: 1,
  title: "Book",
  price: 12.99
};

interface Post {
    id: number;
    title: string;
}

const posts: Post[] = [
  { id: 1, title: "TS Basics" },
  { id: 2, title: "Advanced TS" }
];