export function setupCounter(element: HTMLButtonElement) {
  let counter = 0
  const setCounter = (count: number) => {
    counter = count
    element.innerHTML = `count is ${counter}`
  }
  element.addEventListener('click', () => setCounter(counter + 1))
  setCounter(0)
}

export function getFibonacci(n: number): number {
  if (n < 0) {
    throw new Error('Input must be a non-negative integer');
  }
  
  if (n <= 1) {
    return n;
  }

  return getFibonacci(n - 1) + getFibonacci(n - 2);
}
