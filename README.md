# React Learning Lab

A small repository for practicing React fundamentals with separate Vite-based exercises.

## Projects

- `atomic-counter` - a counter app built with React and `useReducer`
- `omni-list` - a todo/list app built with React, context, and `useReducer`

Each project is self-contained and has its own `package.json`, `node_modules` install, and Vite config.

## Repository Structure

```text
react-learning-lab/
  atomic-counter/
    src/
    public/
    package.json
    vite.config.js
  omni-list/
    src/
    public/
    package.json
    vite.config.js
```

## Getting Started

### Prerequisites

- Node.js 18+ recommended
- npm

### Install Dependencies

Install dependencies inside the project you want to run:

```bash
cd atomic-counter
npm install
```

or

```bash
cd omni-list
npm install
```

### Run in Development

From the project directory:

```bash
npm run dev
```

Vite will print a local URL, usually `http://localhost:5173`, where you can view the app.

## Available Scripts

Both apps use the same script set inside their own folders:

- `npm run dev` - Start the Vite dev server
- `npm run build` - Build the app for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint

## What Each App Demonstrates

### `atomic-counter`

- Reducer-based state transitions with `useReducer`
- Increment, decrement, and reset actions
- Input-driven updates with staged state

### `omni-list`

- List updates with `useReducer`
- Shared state via React context
- Add, complete, delete, and clear-completed flows
- Array updates and index re-mapping after deletion

## Notes

- There is no root-level app or root-level `package.json`; run commands from the project you want to work on.
- The per-project READMEs contain additional exercise-specific notes:
  - [atomic-counter/README.md](atomic-counter/README.md)
  - [omni-list/README.md](omni-list/README.md)
