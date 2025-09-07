// How Promises Work Under the Hood

// JS uses an event loop with:

// Call stack (sync code).

// Callback queue (e.g., setTimeout).

// Microtask queue (Promises).

// Promises use microtask queue → higher priority than callback