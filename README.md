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

**Drag and Drop in TypeScript**
Started with the basics, setup a form using TS classes and implemented form input validation.

</details>

<details>

<summary>Day # 8/100 (12/01/21) :</summary>
Going through more of a Udemy course today scratching my head because something wasn't working.
Turns out, I didn't run `tsc -w` in my other terminal window. (facepalm)

Spent the rest of the evening working on random interview style alogrithm questions. Fibonacci, FizzBuzz,etc...

</details>

<details>

<summary>Day # 9/100 (12/02/21) :</summary>

I know I'm a big advocate of not "context-hopping" but I have this Vue.js bug that I have to itch. I want to see the similarities between React and Vue.

**What is Vue**  
Vue (pronounced /vjuː/, like view) is a progressive framework for building user interfaces. Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally adoptable. The core library is focused on the view layer only, and is easy to pick up and integrate with other libraries or existing projects. On the other hand, Vue is also perfectly capable of powering sophisticated Single-Page Applications when used in combination with modern tooling and supporting libraries.

**Let's get started**

```sh
npm install vue
```

**Vue Components are all in 1 file!?**  
One important thing to note is that separation of concerns is not equal to separation of file types. In modern UI development, we have found that instead of dividing the codebase into three huge layers that interweave with one another, it makes much more sense to divide them into loosely-coupled components and compose them. Inside a component, its template, logic and styles are inherently coupled, and collocating them actually makes the component more cohesive and maintainable.

Even if you don’t like the idea of Single-File Components, you can still leverage its hot-reloading and pre-compilation features by separating your JavaScript and CSS into separate files:

```js
<!-- my-component.vue -->
<template>
  <div>This will be pre-compiled</div>
</template>
<script src="./my-component.js"></script>
<style src="./my-component.css"></style>
```

</details>

<details>

<summary>Day # 10/100 (12/3/2021):</summary>

This evening I spent most of my time playing around with Vue.
Learned a bit more about:

- Declarative Rendering `{{message}}`
- Conditionals and Loops `<span v-if="isVisible">Now you see me</span>`
</details>

<details>

<summary>Day # 11/100 (12/4/2021):</summary>

Today I reimplemented my todolist in Vue from scratch.  
I then created a quick Github Profile Display under the todo list using axios to fetch user info from the github API.

</details>

<details>

<summary>Day # 12/100 (12/5/2021):</summary>
Today I decided to bite the bullet and switch over VSCode to use Vim. This should be interesting.

_v-bind_: takes an atribute in which the data will be bound to. _setting the value of an attribute_
_v-on_: takes an argument after the colon which is an event. (_click, mouseEnter, mouseLeave, etc..._)

**Event Modifiers**

- .stop
- .prevent
- .capture
- .self
- .once
- .passive

```html
<!-- the click event's propagation will be stopped -->
<a v-on:click.stop="doThis"></a>

<!-- the submit event will no longer reload the page -->
<form v-on:submit.prevent="onSubmit"></form>

<!-- modifiers can be chained -->
<a v-on:click.stop.prevent="doThat"></a>

<!-- just the modifier -->
<form v-on:submit.prevent></form>

<!-- use capture mode when adding the event listener -->
<!-- i.e. an event targeting an inner element is handled here before being handled by that element -->
<div v-on:click.capture="doThis">...</div>

<!-- only trigger handler if event.target is the element itself -->
<!-- i.e. not from a child element -->
<div v-on:click.self="doThat">...</div>
```

</details>

<details>

<summary>Day # 13/100 (12/6/2021):</summary>

**Today is the day I recreate my flashcards-react-app in Vue**

- Learned the correct way to pass props to a components.
- Installed Cypress for testing and did a ton of reading.
  - Tomorrow I plan on doing a deeper dive on cypress.
  </details>

<details>

<summary>Day # 14/100 (12/7/2021):</summary>

**Methods vs Computed Properties vs Watchers**

**Methods**

- Use with event binding OR data binding.
- Data binding: Method is executed for every "re-render" cycle of the component.
- Use for events or data that really needs to be re-evaluated all of the time.

**Computed Properties**

- Use with data binding.
- Computed properties are only re-evaluated if one of their "used values" changes.
- Use for data that depends on other data.

**Watchers**

- Not used directly in the template.
- Allows you to run any code in reaction to some changed data(e.g. sending an HTTP request etc...)
- Use for any non-data updates you want to make.

- Learned the correct way to pass props to a components.

</details>

<details>

<summary>Day # 15/100 (12/8/2021):</summary>

Today I had this great idea to make a "mini-game" of sorts in Vue.

**GetIntoTech**

- Level up to get hired from the company of your dreams.
  - 2 "health bars"
    - Developer Skills
    - Company Difficulty or possibility to hire or something.
  - 4 buttons
    - Take a Udemy Course
    - Connect to people on LinkedIn
    - Send out an application
    - Grind LeetCode

I was able to get a simple UI fleshed out and some basic functionality setup.

</details>

<details>

<summary>Day # 16/100 (12/9/2021):</summary>

Today I spent most of my time working on the mini-game logic.

- Implemented a stamina meter that decreases continuously.
- Added a sleep function that restores your stamina but puts a freeze on the buttons for 3 seconds.
- Implemented a modal popup if you run out of stamina that resets the game on close.

</details>

<details>

<summary>Day # 17/100 (12/10/2021):</summary>

After listening to a great podcast while sitting in a ton of traffic, I decided to try to put a little more effort towards learning CSS "in-depth." I have never really tried to learn it thoroughly and I'm honestly tired of throwing random properties at an element until it looks close to what I'm looking for. One day I want to know why things are working they way they are and be able to produce pixel perfect layouts given a design.

Therefore, today I have decided to work on a simple FrontEndMentor project and brush up on my CSS skills.

</details>

<details>

<summary>Day # 18/100 (12/11/2021):</summary>
A few random CSS notes.

**Specificity**
Specificity is a weight that is applied to a given CSS declaration, determined by the number of each selector type in the matching selector. When multiple declarations have equal specificity, the last declaration found in the CSS is applied to the element. Specificity only applies when the same element is targeted by multiple declarations. As per CSS rules, directly targeted elements will always take precedence over rules which an element inherits from its ancestor.

**Selector Types**

1. Type selectors (e.g., h1) and pseudo-elements (e.g., ::before).
2. Class selectors (e.g., .example), attributes selectors (e.g., [type="radio"]) and pseudo-classes (e.g., :hover).
3. ID selectors (e.g., #example).

_Universal selector (\*), combinators (+, >, ~, ' ', ||) and negation pseudo-class (:not()) have no effect on specificity. (The selectors declared inside :not() do, however.)_

**Inline styles added to an element (e.g., style="font-weight: bold;") always overwrite any styles in external stylesheets, and thus can be thought of as having the highest specificity.**

**The !important exception ruels of thumb**

- **Always** look for a way to use specificity before even considering !important
- **Only** use !important on page-specific CSS that overrides foreign CSS (from external libraries, like Bootstrap or normalize.css).
- **Never** use !important when you're writing a plugin/mashup.
- **Never** use !important on site-wide CSS.

</details>

<details>

<summary>Day # 19/100 (12/12/2021):</summary>

- How Vue looks under the hood.
- Todo List
- Rabbit DSA with Chris.
- Brain F\*\*\*\* with python and "global" CONSTANTS (first time I wanted to get back into my JavaScript code)

</details>

<details>

<summary>Day # 20/100 (12/13/2021):</summary>

- Todo List ✔✔
- How Vue Updates the DOM ✔✔
- Vue Instance Lifecycle
  - createApp()
  - beforeCreate()
  - created()
  - beforeMount()
  - mounted()
  - DATA CHANGED
    - beforeUpdate()
    - updated()
  - INSTANCE UNMOUNTED
    - beforeUnmount()
    - unmounted()

</details>

<details>

<summary>Day # 21/100 (12/14/2021):</summary>

Started off the evening with a bit more of Vue theory and then jumped into another project, this time a simple portfolio project to practice using components, props, and state management with VueX.

</details>

<details>

<summary>Day # 22/100 (12/15/2021):</summary>

**VueX**

- Commit a Mutation
- Dispatch an action

**Vue Deeper Dive**

- Global vs Local Components
- Scoped Styles
- Slots
  - Named Slots (must name them if more than 1)
  - `<template v-slot:NAMEOFSLOT>`
  - Scoped Slots
  </details>

<details>

<summary>Day # 23/100 (12/16/2021):</summary>

Took it easy today and spent my entire evening messing around on the simple portfolio vue project I started's CSS.

CSS Pros blow me away. Mad props to people who fully understand what is going on under the hood in CSS.

</details>

<details>

<summary>Day # 24/100 (12/17/2021):</summary>

- Simple Vue Portfolio
- VueX
- Looked into a bug in a fellow developers code.

</details>

<details>

<summary>Day # 25/100 (12/18/2021):</summary>

- Purchased domain for future business endevors. ✔
- Start fresh React/Vue project of future business. ✔
- Add all inital components, pages, and packages. ✔

</details>

<details>

<summary>Day # 26/100 (12/19/2021):</summary>

- Added a cool card component to the shop page.
- Looking to get into user login-registration tomorrow.

</details>

<details>

<summary>Day # 27/100 (12/20/2021):</summary>

Continue working on AlawaysZenCeramics.com

Went back to a previous react/redux ecommerce store I build with a Udemy course to refresh my knowledge of Firebase Authenticaiton.

Also broke the website in to a few smaller components.

</details>

<details>

<summary>Day # 28/100 (12/21/2021):</summary>

**AlwaysZenCeramics.com**

- Added Firebase User Auth
- Added a UserContext to be able to access the logged in user info at any time.
- Added a few pictures to the home page.

</details>

<details>

<summary>Day # 29/100 (12/22/2021):</summary>

Today I worked on a take home assessment given to a fellow div.  
Got the Node.js/Express server running with postgreSQL as the database.  
Simple Client was created with Vue.

</details>

<details>

<summary> Day #30/100 (12/23/2021):</summary>

- Finish up the take home assessment.
- Added the addCar functionality.

</details>

<details>

<summary>Day # 31/100 (12/24/2021):</summary>

**Merry Christmas Eve**

</details>

<details>

<summary>Day # 32/100 (12/25/2021):</summary>

**Merry Christmas!**

- going through a mini Vue/Vuex shopping cart blog on digitalocean.

</details>

<details>

<summary>Day # 33/100 (12/26/2021):</summary>

- Finish up the vuex shopping cart project.
- Help user on digitalocean blog with an issue with their code.
  - Realzied their issue was that they were comparing a string to an int. (fixed code below)
  ```
  ... parseInt(req.params.id);
  ```

</details>

<details>

<summary>Day # 34/100 (12/27/2021):</summary>

- Call with David Marshall to help him out with his Vue 2 App.

</details>

<details>

<summary>Day # 35/100 (12/28/2021):</summary>

- Scratch my head dealing with firebase database bugs.

</details>

<details>

<summary>Day # 36/100 (12/29/2021):</summary>

- Going to start a fresh Vue.js project for AlwaysZenCeramics
  - Looking into routing.
  - Going to use Vuex for state management.
  - Firebase for Authentication and storing data.

</details>

<details>

<summary>Day # 37/100 (12/30/2021):</summary>

- Firebase helper methods for adding info to the database completed.
- Need to setup the google auth etc...

</details>

<details>

<summary>Day # 38/100 (12/31/2021):</summary>

- Finished all of the google O-Auth w/ firebase.
  - The user can now login and their name gets displayed as well as a link to logout.

</details>

<details>

<summary>Day # 39/100 (1/1/2022):</summary>

**Happy New Year!**

- Another day working on AlwaysZenCeramics!
- Worked out Firebase bugs and added a card component.

</details>

<details>

<summary>Day # 40/100 (1/2/2022):</summary>

**Always Zen Ceramics**

- Add "add to cart" feature as well as shopping cart & badge icon.

</details>

<details>

<summary>Day # 41/100 (1/3/2022):</summary>

- Added the cartDropdown Component as well as the functionality.
  - Need to work on the styling still.

</details>

<details>

<summary>Day # 42/100 (1/4/2022):</summary>

- Spent the evening working a little bit with styling Always Zen Ceramics.
  - AKA: Took it easy.

</details>

<details>

<summary>Day # 43/100 (1/5/2022):</summary>

**Happy Birthday Mom...**
_Gone but not forgotten_

- Meeting with Josh Medeski to chat about Vim and learn a thing or two.

</details>

<details>

<summary>Day # 44/100 (1/6/2022):</summary>

- Add remove from cart Vuex functionality.
- Persist cart data in local storage.
  - added an initilizeStore mutation that gets commited before the app gets created.

</details>

<details>

<summary>Day # 45/100 (1/7/2022):</summary>

# Happy Birthday To Me!

**Just because it's my birthday, doesn't mean I'm taking a day off!**

- Add TailwindCSS to the project
- Convert the Header and Dropdown to use TailwindCSS

</details>

<details>

<summary>Day # 46/100 (1/8/2022):</summary>

Taking it easy.

Going to read the tailwind docs for a few.

</details>

<details>

<summary>Day # 47/100 (1/9/2022):</summary>

**More Fun With TailwindCSS**

- learned about creating your own components.
- added a button component with primary and secondary colors.

</summary>

</details>

<details>

<summary>Day # 48/100 (1/10/2022):</summary>

- Added "favoriting" functionality to the store.
- Added a bit of styling.
- Added a "HeaderDropdownIcon" component.

</details>

<details>

<summary>Day # 49/100 (1/11/2022):</summary>

- Created a super awesome notion board to start applying to jobs and stay on top of everything.
- Sent my first cold applications on Indeed.
- Looking forward to connecting with recruiters and trying to land a job.

</details>

<details>

<summary>Day # 50/100 (1/12/2022):</summary>

- Since today we are at the half way point, I'm going to do a bit of context hopping.
- I have a future potential interview possibly and their team is using:

  - React
  - Redux Tool Kit
  - Typescript
  - Styled Components
    **Need to make sure I can manage just incase I am thrown in the deep end**

- What I actually ended up doing was create a good looking developer resume.

</details>

<details>

<summary>Day # 51/100 (1/13/2022):</summary>

After a 13 hour shift, there wasn't much brain power left in this mind of mine.

Decided to spend the evening passively listening to Mark Erikson / Jason Lengstorf discussing how to learn "Modern Redux."

</details>

<details>

<summary>Day # 52/100 (1/14/2022):</summary>

- Going to work on AlwaysZenCeramics for a bit.
  - implemented a liked items page that passes in the liked items from the vuex store and renders individual cards.

</details>

<details>

<summary>Day # 53/100 (1/15/2022):</summary>

**MiniProject**

- Time to take a little break to work on a mini React....Then Vue... Tic Tac Toe project.
- Took care of the react version. Will work on the Vue version tomorrow.

</details>

<details>

<summary>Day # 54/100 (1/16/2022):</summary>

- Refactor React Tac Toe and upload on Stackblitz for a mentor of mine.
- Copied over project.

- Looking into Next.js for a possible blog app? maybe? haha

</details>

<details>

<summary>Day # 55/100 (1/17/2022):</summary>

- Spent the evening watching videos on RTK whilist researching and applying to jobs... Shhhhh

</details>

<details>

<summary>Day # 56/100 (1/18/2022):</summary>

- Starting fresh with React and Typescript.
- Working on a blog project (following youtube) for Typescript/React practice.

</details>

<details>

<summary>Day # 57/100 (1/18/2022):</summary>

- Continue following along learning Typescript Day 2.

</details>

<details>

<summary>Day # 58/100 (1/19/2022):</summary>

- Spent most of the evening trying to figure out how to convert over some code into React Router V6 but ended up just downgrading to V5.2

</details>

<details>

<summary>Day # 59/100 (1/20/2022):</summary>

- Started off the evening applying to jobs on linkedin.
- Finished up with watching some youtube videos on Typescript/react and reading the docs.

</details>

<details>

<summary>Day # 60/100 (1/21/2022):</summary>

- Passive learning / updated github profile.

</details>

<details>

<summary>Day # 61/100 (1/22/2022):</summary>

- Spent my entire evening leveling up in codewars. I really love this platform. Much easier to get going than leetcode which is a super boost of confidence. Here is a pretty awesome way to create a phone number format when given an array of 10 digits.

```js
function createPhoneNumber(numbers) {
  var format = "(xxx) xxx-xxxx";

  for (var i = 0; i < numbers.length; i++) {
    format = format.replace("x", numbers[i]);
  }

  return format;
}
```

I think I will be working on DSAs for a few weeks straight and then get back into doing projects + DSAs.

</details>

<details>

<summary>Day # 62/100 (1/23/2022):</summary>

- Another day another algorithm.
  5kyu The Clockwise Spiral

</details>

<details>

<summary>Day # 63/100 (1/24/2022):</summary>

- Quick dive into Vue + Nuxt.js
  - worked on a Movie DB like the one on my portfolio just using Vue and Nuxt.

</details>

<details>

<summary>Day # 64/100 (1/25/2022):</summary>

- Install Elixir
- Install Poenix
- Create an API with Phoenix

</details>

<details>

<summary>Day # 65/100 (1/26/2022):</summary>

**I got introduced to an amazing person from my mentor today and may have just gotten things heading in the right direction. Fingers Crossed!**

- Today I'm going to dive back into Node.js to create a more robust backend API using _Express_

</details>

<details>

<summary>Day # 66/100 (1/27/2022):</summary>

**Time to start a decent sized project**

# Trello for Job Application Tracking

## Tech Stack

- Vue
- Nuxt
- Firebase

</details>

<details>

<summary>Day 67/100 (1/28/2022):</summary>

- The entire evening was spent in "Learn Vim" in VSCode.

</details>

<details>

<summary>Day 68/100 (1/29/2022):</summary>

- Started off by getting sidetracked and editing my linkedin profile picture...
- Answered 2 katas on CodeWars

</details>

<details>

<summary>Day 69/100 (1/30/2022):</summary>

- Deep dive into React Hooks (again).

</details>

<details>

<summary>Day 70/100 (1/31/2022):</summary>

- Work on take home assessment for Sytem76!

**Vue Frontend connecting to an Elixir Backend API**

</details>

<details>

<summary>Day 71/100 (2/1/2022):</summary>

- Work on take home assessment for Sytem76! (Still!)

**Vue Frontend connecting to an Elixir Backend API**

</details>

<details>

<summary>Day 72/100 (2/2/2022):</summary>

- Work on take home assessment for Sytem76! (Still!)

**Vue Frontend connecting to an Elixir Backend API**

</details>

<details>

<summary>Day 73/100 (2/3/2022):</summary>

- Looking into AVA and TestCafe to add testing to my take home assessment for System76!
  - AVA: Node.js test runner
  - TestCafe Node.js test tool to automate end-to-end testing

</details>

<details>

<summary>Day 74/100 (2/4/2022):</summary>

- Finally going to take a minor break.
- Time to brush up on my git knowledge after digging a huge hole in my repo today.

</details>

<details>

<summary>Day 75/100 (2/5/2022):</summary>

- 75% of this challenge is done! What a quick 75 days!
- React review, git review

</details>

<details>

<summary>Day 76/100 (2/6/2022):</summary>

- Let's get into some responsive components in Vue.

</details>

<details>

<summary>Day 77/100 (2/7/2022):</summary>

- Work on a new blog project.

  - Created the Navbar
  - Created the Homepage
    - BlogCard Component
    - FeaturedCard Component

- Plan on connecting Firebase tomorrow for Auth and Data Persistance.

</details>

<details>

<summary>Day 78/100 (2/8/2022):</summary>

- Added the blog detail page and functionality using Vuex.
  - tomorrow I will connect Firebase and start storing the data there.

</details>

<details>

<summary>Day 79/100 (2/9/2022):</summary>

- Vue overview with Devlin.

</details>

<details>

<summary>Day 80/100 (2/10/2022):</summary>

- Add firebase auth and data persistance to the blog

</summary>

<details>

<summary>Day 81/100 (2/11/2022):</summary>

- work on the UI a bit and look into data persistance with firebase.

</details>

<summary>Day 82/100 (2/12/2022):</summary>

- work on the UI a bit and look into data persistance with firebase.

</details>

<summary>Day 83/100 (2/13/2022):</summary>

- Fix Firebase bugs, go viral on LinkedIn

</details>

<details>

<summary>Day 84/100 (2/14/2022):</summary>

- Completed an assessment for a company on HackerRank.

</details>

<details>

<summary>Day 85/100 (2/15/2022):</summary>

- Completed an assessment for a company on HackerRank. (again) 
  - Most likely failed but it was fun.

</details>

<details>

<summary>Day 86/100 (2/18/2022):</summary>

Long drive to Sacramento .

Only coding today consists of podcasts.

</details>
