

const numbers = [5, 3, 8, 1, 9];

numbers.sort((a, b) => a - b);
console.log(numbers);


const fruits = ["banana", "apple", "cherry", "date"];
fruits.sort((a, b) => a.localeCompare(b));
console.log(fruits);


const users = [
  { name: "Maria", age: 25 },
  { name: "Ivan", age: 20 },
  { name: "George", age: 30 }
];

users.sort((a, b) => a.age - b.age);
console.log(users);

const users1 = [
  { name: "Maria", age: 25 },
  { name: "Ivan", age: 20 },
  { name: "George", age: 30 }
];

users1.sort((a, b) => a.name.localeCompare(b.name));
console.log(users1);

const users2 = [
  { name: "Maria", age: 25 },
  { name: "Ivan", age: 25 },
  { name: "George", age: 30 }
];

users2.sort((a, b) => {
    console.log(a.age !== b.age)
    if(a.age !== b.age){
       return b.age - a.age;
       
    }
    else{
       return a.name.localeCompare(b.name);
    }
})

console.log(users2);