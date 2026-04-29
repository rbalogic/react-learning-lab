# Omni List

## Learnings

- `map` always returns a JSX `()` and not `{}`
- To change array items in state, use `items: [...state.items, action.value]` rather than `array.push`
- `map` should always be set with `(item, index)` and use `<p key={index}>`
