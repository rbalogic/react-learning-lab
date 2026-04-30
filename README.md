# React Learning Lab

A small repository for practicing React fundamentals with separate Vite-based exercises.

## Projects

- `atomic-counter` - a counter app built with React and `useReducer`
- `omni-list` - a todo/list app built with React, context, and `useReducer`
- `useref-playground` - a playground for practicing `useRef` and DOM access
- `wiki-search-debouncer` - a debounced Wikipedia search app built with React hooks

Each project is self-contained and has its own `package.json`, `node_modules` install, and Vite config.

## Repository Structure

```text
react-learning-lab/
  atomic-counter/
  omni-list/
  useref-playground/
  wiki-search-debouncer/
```

## Getting Started

### Prerequisites

- Node.js 18+ recommended
- npm

### Installation & Usage

All projects are independent. To run a specific exercise:

1. **Navigate to the project directory:**
   ```bash
   cd <project-name>
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Run in development:**
   ```bash
   npm run dev
   ```

Vite will print a local URL (usually `http://localhost:5173`) where you can view the app.

### Available Scripts

- `npm run dev` - Start the Vite dev server
- `npm run build` - Build the app for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint

## Project Details

| Project | Features / Demonstrates |
| :--- | :--- |
| [`atomic-counter`](atomic-counter/) | • Reducer-based state transitions (`useReducer`) <br> • Increment, decrement, and reset actions <br> • Input-driven updates with staged state |
| [`omni-list`](omni-list/) | • List updates (`useReducer`) <br> • Shared state via React Context <br> • Add, complete, delete, and clear-completed flows <br> • Array updates and index re-mapping |
| [`useref-playground`](useref-playground/) | • DOM access with `useRef` <br> • Auto-focusing elements with `useEffect` <br> • Imperative interaction with input elements |
| [`wiki-search-debouncer`](wiki-search-debouncer/) | • Input state with `useState` <br> • Debounced side effects with `useEffect` <br> • Async fetch flow against Wikipedia API <br> • Loading and result rendering patterns |

## Notes

- There is no root-level app or root-level `package.json`. You must run commands from within the specific project folder you are working on.
