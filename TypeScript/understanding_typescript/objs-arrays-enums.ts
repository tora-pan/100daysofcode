enum Role {
  ADMIN,
  AUTHOR,
  SOFTWARE_DEVELOPER,
}

const person = {
  name: "Travis",
  age: 34,
  hobbies: ["Sports", "Cooking"],
  role: Role.ADMIN,
};

console.log(person.name);

if (person.role === Role.ADMIN) {
  console.log("ha");
}
