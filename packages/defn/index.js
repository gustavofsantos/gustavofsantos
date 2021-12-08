export default function defn(...fns) {
  return function wrapped(...args) {
    const fn = fns.find((fn) => fn.length === args.length);
    if (!fn)
      throw new Error(`No function definition found with arity ${args.length}`);

    return fn(...args);
  }
}

