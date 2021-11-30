# ⚡ 100 Days of Code ⚡

## My official learning in public journey starts now 11/24/21! This is more of a way to keep track of my own progress and remeber what I have worked on day to day.<br><br>

<details>
<summary>Day # 1/100 (11/24/21) :</summary>
Thanks to Black Friday, I picked up a TypeScript Udemy course to jump on the TypeScript band waggon. A few things from today's study session:

- Complile your .ts file with `tsc filename.ts`
- Core Types (_Always written in all lowercase_)
  - number (_All numbers, no differentiation between integers or floats_)
  - string (_All text values_)
  - boolean (_Just these two, no "truthy" or falsy" values_)
  - object (_Any JavaScript object, more specific types (type of object) are possible_)
  - Array (_Any JavaScript array, type can be flexible or strict(regarding the element types)_)
  - Tuple (_Added by TypeScript: Fixed-length array_)
  - Enums (_Added by TypeScript: Automatically enumerated global constant identifiers_)
  - Any (_Any kind of value, no specific type assignment_)
- Union Types (_Multiple types separated with a | _)
- Literal Types (_Specific Types, "as-number" or 5.12 _)
- Type Aliases (_Allow you to encode your own custom types_)

  ```javascript
  type ConversionDescriptor = "as-number" | "as-text";
  ```

  you can also do things like:

  ```javascript
  type User = { name: string, age: number };
  const u1: User = { name: "Max", age: 30 }; // this works!
  ```

</details>

<details>

<summary>Day # 2/100 (11/25/21) :</summary>

Happy Thanksgiving everyone!

- `tsc app.ts --watch` (_This will watch for modifications to 'app.ts' and auto compile_)
  <br>

In order for TypeScript to know that you want to watch all .ts files in your entire project you must first run (_only once_):

```sh
tsc --init
```

This will create a `tsconfig.json` file that has all of your necessary TypeScript configuration information inside.  
Once you have done this, you can run  
`tsc --watch`  
without pointing it at a specific file and this will watch all TypeScript files in your project and recompile on change.

To specifically include or exclude a file or files from being compiled in your project, add the following to your tsconfig.json:

```js
...
"exclude": [
  "node_modules" // already excluded by default
],
"include": [
  "fileToInclude.ts",
  "otherFile.ts"
]
```

#### Setting sourceMap to true will give you access to your TypeScript files in the developer console.

</details>

<details>

<summary>Day # 3/100 (11/26/21) :</summary>

### TypeScript / JavaScript

- The "Rest" parameter  
  _allows you to take a varying amount of parameters_

```js
const add = (...numbers: number[]) => {
  return numbers.reduce((curResult, vurValue) => {
    return curResult + curValue;
  }, 0);
};
```

### AWS Developer Assoicate

- IAM (_Identity and Access Management, Global service_)
  - ### Policies
    example below:
  ```json
  {
    "Version": "2021-12-17",
    "Id": "S3-Account-Permissions",
    "Statement": [
      {
        "Sid": "1",
        "Effect": "Allow",
        "Principal": {
          "AWS": [arn:aws:iam::123456789012:root"]
        },
        "Action":[
          "s3:GetObject",
          "s3:PutObject"
        ],
        "Resource":[arn:aws:s3:::mybucket/*"]
      }
    ]
  }
  ```
  - Consists of
    - Version: policy language version, always include "2012-10-17"
    - Id: an identifier for the policy(optional)
    - Statement: one or more individual statements(required)
  - Statements consists of
    - Sid: an identifier for the statement(optional)
    - Effect: whether the statement allows or denies access(Allow,Deny)
    - Principal: account/user/role to which this policy is applied to
    - Action: list of actions this policy allows or denies
    - Resource list of resources to which the actions are applied to
    - Condition: conditions for when this policy is in effect(optional)<br><br>
  - ### MFA(_Multi Factor Authentication_)
    - Password + (device you own) => successful login
  - ### Roles
    - Just like permissions but for Services
  - ### Best Practices
    - Don't use the root account except for AWS account setup
    - One physical user = One AWS user
    - Assign users to groups and assign permissions to those groups
    - Create a strong password policy
    - Use and enforce the use of MFA
    - Create and use Roles for giving permissions to AWS services
    - Use Access Keys for Programmatic Access (CLI/SDK)
    - Audit permissions of your account with the IAM Credentials Report
    - **NEVER** share IAM users & Access Keys

</details>

<details>

<summary>Day # 4/100 (11/27/21) :</summary>

### S.O.L.I.D Design Principles

- Single Responsibility Principle
  - A class should have one and only one reason to change, meaning that a class should have only one job.
- Open/Closed Principle
  - Objects or entities should be open for extension but closed for modification.
    _This means that a class should be extendable without modifying the class itself._
- Liskov Substitution Principle
  - The principle defines that objects of a superclass shall be replaceable with objects of its subclasses without breaking the application. That requires the objects of your subclasses to behave in the same way as the objects of your superclass.
- Interface Segregation Principle
  - A client should never be forced to implement an interface that it doesn’t use, or clients shouldn’t be forced to depend on methods they do not use.
    _the goal of the Interface Segregation Principle is to reduce the side effects and frequency of required changes by splitting the software into multiple, independent parts._
- Dependency Inversion Principle
  - Entities must depend on abstractions, not on concretions. It states that the high-level module must not depend on the low-level module, but they should depend on abstractions.

</details>

<details>

<summary>Day # 5/100 (11/28/21) :</summary>

Today is the first time that I have ever run the command:

```sh
npx create-react-app typescript-flashcards --template typescript
```

Soon after that, I decided to take my own advice and not context switch. Rather than jumping straight into a React project with TypeScript, I decided to just continue along learning all that I can about TypeScript.

**Advanced TypeScript Types**

### Intersection Types

Intersections Types are created with the "&"

```ts
type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate;
  Date;
};

type ElevatedEmployee = Admin & Employee;
```

_when 2 union types are used, only the type in common gets used and when an object type is used, the new type is the combination of all properties_

### Type Guards

When you need to type check a union type or other overlapping type, you can can check it with the `typeof` operator or using `in` depending if it is built in type or user created type.

```ts
function move(pet: Fish | Bird) {
  if ("swim" in pet) {
    return pet.swim();
  }
  return pet.fly();
}
```

```ts
function add(num: number | string, num2: number | string) {
  if (typeof num === "string" || typeof num2 === "string") {
    return num.toString() + num2.toString();
  }
  return num + num2;
}
```

### Discriminated Unions

(available with object/interfaces)  
_A common technique for working with unions is to have a single field which uses literal types which you can use to let TypeScript narrow down the possible current type._  
Example:

```ts
interface Bird {
  type: "bird";
  flyingSpeed: number;
}

interface Horse {
  type: "horse";
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed;
  switch (animal.type) {
    case "bird":
      speed = animal.flyingSpeed;
      break;
    case "horse":
      speed = animal.runningSpeed;
      break;
  }
  console.log("Moving at speed: " + speed);
}

moveAnimal({ type: "bird", flyingSpeed: 10 });
```

### Type Casting

This can be done using "<>" before an element or using "as **\_\_**" after

### Function Overloads

Adding the same function signature above with different parameter types followed by a ";".

### Optional Chaining

Using a ? after an object rather than checking if the object is not null.

```js
console.log(fetchedUserData?.job?.title);
```

### Nullish Coalescing

You can use a "??" to return the right-hand operand when its left-hand operand is null or undefined.

```js
const storedData = userInput ?? "DEFAULT";
//if userInput is null, 'DEFAULT' will be set, if not, userInput will be used.
```

</details>

<details>

<summary>Day # 6/100 (11/29/21) :</summary>

Today we take a look at **Generics**

```ts
//Array Type
const names: Array<string> = ["Travis", "Chris"];

//Promise Type
const promise: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("This is done!");
  }, 2000);
});
```

**Generic Function**

```ts
function merge<T, U>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergedObj = merge({ name: "Travis" }, { age: 32 });
console.log(mergedObj); // {name: 'Travis', age: 32}
```

This way, when we call this merge function, the type gets passed in and then used below.  
Generic Types/Functions are very powerful.

**Constraints**
Using the "extends" followed by the type after the "T" and "U" in the code snippet above, you can explicitly set the type of the generic.

```ts
function merge<T extends object, U extends object>(objA: T, objB: U) {
  //This will make sure that the items getting passed in have to be an object.
}
```

**The 'keyof' Constraint**

```ts
function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return "Value: " + obj[key];
}
extractAndConvert({ name: "Travis" }, "name");
```

TypeScript will make sure that the the second argument is a valid key for the object passed in.

**Decorators**

- Class Decorators
  - A Class Decorator is declared just before a class declaration. The class decorator is applied to the constructor of the class and can be used to observe, modify, or replace a class definition. A class decorator cannot be used in a declaration file, or in any other ambient context (such as on a declare class).The expression for the class decorator will be called as a function at runtime, with the constructor of the decorated class as its only argument.
- Method Decorators
  - A Method Decorator is declared just before a method declaration. The decorator is applied to the Property Descriptor for the method, and can be used to observe, modify, or replace a method definition. A method decorator cannot be used in a declaration file, on an overload, or in any other ambient context (such as in a declare class).
- Accessor Decorators
  - An Accessor Decorator is declared just before an accessor declaration. The accessor decorator is applied to the Property Descriptor for the accessor and can be used to observe, modify, or replace an accessor’s definitions. An accessor decorator cannot be used in a declaration file, or in any other ambient context (such as in a declare class).
- Property Decorators
  - A Property Decorator is declared just before a property declaration. A property decorator cannot be used in a declaration file, or in any other ambient context (such as in a declare class).
- Parameter Decorators
  - A Parameter Decorator is declared just before a parameter declaration. The parameter decorator is applied to the function for a class constructor or method declaration. A parameter decorator cannot be used in a declaration file, an overload, or in any other ambient context (such as in a declare class).

</details>

<details>

<summary>Day # 7/100 (11/30/21) :</summary>

</details>
```
