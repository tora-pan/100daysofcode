# ⚡ 100 Days of Code ⚡

## My official learning in public journey starts now 11/24/21! This is more of a way to keep track of my own progress and remeber what I have worked on day to day.<br><br>

### Day # 1/100 (11/24/21) :

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

  <br>

### Day # 2/100 (11/25/21) :

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
