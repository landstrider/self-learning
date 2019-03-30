const add = value => ({ 
  run(acc) { return acc + value; },
  invert() { return add(-value); }
});

const multiply = value => ({
  run(acc) { return acc * value; },
  invert() { return multiply(1 / value); }
});

const identity = ({ run(acc) { return acc; }, invert() { return identity; } });

//combines multiple operations, e.g. combine(add(1), multiply(2)) is (acc + 1) * 2 and can be inversed to acc / 2 + 1
const combine = (...ops) => ({
  run(acc) { return ops.reduce((acc, op) => op.run(acc), acc); },
  invert() { return combine(...[...ops].reverse().map(it => it.invert())); }
});

// Represents an operation node in the tree
const op = (key, op, ...sub) => ({ key, op, sub });
const tree = (key, ...sub) => op(key, identity, ...sub); 

// Generates the resulting object based on the tree
const fromRoot = (root, value, result = {}) => {
  result[root.key] = value;
  for(const child of root.sub) 
    fromRoot(child, child.op.run(value), result);
  return result;
};

// like "undefined", just that it can be distinguished from "undefined" as an operation might return that
const nothing = Symbol("nothing");

// Calculates the base value from one of the trees nodes
const getBase = (tree, key, value) => {
  if(tree.key === key)
    return tree.op.invert().run(value);

  for(const child of tree.sub) {
    const res = getBase(child, key, value);
    if(res === nothing) continue;
    return tree.op.invert().run(res);
  }

  return nothing;
};

setTimeout(() => {
  const stuff = tree("A",
    op("B", multiply(10), // B = A * 10
      op("C", add(10)) // C = B + 10
    ),
    op("D", combine(add(10), multiply(10))) // D = (A + 10) * 10
  );

  // No matter which value you know, you will get back the same object
  const a = fromRoot(stuff, getBase(stuff, "A", 1));
  // const b = fromRoot(stuff, getBase(stuff, "B", 10));
  // const c = fromRoot(stuff, getBase(stuff, "C", 20));
  // const d = fromRoot(stuff, getBase(stuff, "D", 110));
   console.log("a", a);
});
