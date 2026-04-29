# React Learning Lab

A small learning repository for practicing React fundamentals.

Currently, this repo contains one project:

- `atomic-counter`: a simple counter app built with React + Vite using `useReducer` for state transitions.

## Repository Structure

```text
react-learning-lab/
  atomic-counter/
    src/
    package.json
```

## Getting Started

### Prerequisites

- Node.js 18+ (recommended: latest LTS)
- npm

### Install Dependencies

```bash
cd atomic-counter
npm install
```

### Run in Development

```bash
npm run dev
```

Vite will print a local URL (usually `http://localhost:5173`) where you can view the app.

## Available Scripts

Run these commands inside `atomic-counter`:

- `npm run dev` - Start the Vite dev server
- `npm run build` - Build the app for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint

## What This App Demonstrates

The `atomic-counter` app includes:

- Increment and decrement actions
- Reset action
- Input-driven counter updates via reducer actions
- Centralized state transitions using `useReducer`

## Reducer Action Types

The `atomic-counter` reducer currently supports:

- `INCREMENT` - Increase `count` by 1
- `DECREMENT` - Decrease `count` by 1
- `RESET` - Reset `count` to 0
- `SET_COUNTER_VALUE` - Update the staged input value (`counterChangeValue`)
- `CHANGE_COUNTER_VALUE` - Set `count` to the staged input value

## Notes

- Dependencies are managed per project (currently only `atomic-counter`).
- As more learning exercises are added, this root README can be expanded with links and quickstart instructions for each app.
