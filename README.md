# ⚡ 100 Days of Code ⚡

## My official learning in public journey starts now 11/24/21! This is more of a way to keep track of my own progress and remeber what I have worked on day to day.<br><br>

## Day # 1/100 (11/24/21) :

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

## Day # 2/100 (11/25/21) :

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

## Day # 3/100 (11/26/21) :

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
- 

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
