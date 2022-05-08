const diyor = {
  age: 21,
};

let counter: number = 5;
const arr: string[] = ["apple", "banana"];
const num: number[] = [1, 2, 3];
const bool: boolean[] = [true, false];

const logger: (name: number) => void = (name: number) => {
  console.log(name);
};

const calc = (a: number, b: number) => {
  a + b;
};
// calc(1, 2);

const sayErr = (msg: string): never => {
  throw new Error(msg);
};
