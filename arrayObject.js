const users = [
  { name: "Maria", hobbies: ["reading", "swimming", "traveling"] },
  { name: "Ivan", hobbies: ["watching movies", "gaming"] },
  { name: "George", hobbies: ["cooking", "cycling"] }
];

let allHobbies = [];

for( let person of users){
  let name = person.name;
  let hobbies = person.hobbies;

  for(let hobby of hobbies){

  allHobbies.push(hobby);
  }
  console.log(`${name}: ${hobbies.join(", ")}`);


}


console.log([...new Set(allHobbies)]);