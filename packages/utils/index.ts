export const throttle = (func: Function, delay: number) => {
  let start = Date.now();
  return (...args: any) => {
    const end = Date.now();
    if (end - start > delay) {
      func.apply(this, args);
      start = Date.now();
    }
  };
};
