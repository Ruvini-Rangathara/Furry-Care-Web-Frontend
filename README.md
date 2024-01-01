# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list



## Commands

### Create Vite React TypeScript project

npm create vite@latest my-project -- --template react-ts

cd my-project

npm install

### Install Tailwind CSS and related dependencies

npm install -D tailwindcss postcss autoprefixer

npx tailwindcss init -p

### Configure tailwind.config.js

/** @type {import('tailwindcss').Config} */

export default {
content: [
"./index.html",
"./src/**/*.{js,ts,jsx,tsx}",
],
theme: {
extend: {},
},
plugins: [],
}

### Update index.css

@tailwind base;
@tailwind components;
@tailwind utilities;

### Run the development server

npm run dev


### add nextui to project

npm i @nextui-org/react framer-motion

// tailwind.config.js

const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
content: [
// ...
"./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
],
theme: {
extend: {},
},
darkMode: "class",
plugins: [nextui()]
}

// main.tsx

import {NextUIProvider} from '@nextui-org/react'

<React.StrictMode>

<NextUIProvider
->

<App
/>

</NextUIProvider
->

</React.StrictMode>



## Links 

https://tailwindcss.com/docs/guides/vite

https://nextui.org/docs/frameworks/vite