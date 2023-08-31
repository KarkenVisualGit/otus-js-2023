let a = Number(prompt('Enter a coefficient'));
let b = Number(prompt('Enter b coefficient'));
let c = Number(prompt('Enter c coefficient'));
export function calculateSquareRoot(a, b, c) {
    const discr = Math.pow(b, 2) - 4 * a * c;
    const result = { roots: [], message: '' };
  
    if (discr < 0) {
      result.message = 'The equation has no roots';
    } else if (discr === 0) {
      const x = (-b) / (2 * a);
      result.roots.push(x);
    } else if (discr > 0) {
      const x1 = (-b + Math.sqrt(discr)) / (2 * a);
      const x2 = (-b - Math.sqrt(discr)) / (2 * a);
      result.roots.push(x1, x2);
    }
    console.log(result);
    return result;
  }
  calculateSquareRoot(a, b, c);