export function calculateCircleProperties(r) {
  const circleLength = 2 * Math.PI * r;
  const circleArea = Math.PI * Math.pow(r, 2);

  console.log(Math.floor(circleLength));
  console.log(Math.floor(circleArea));

  return {
    circleLength: Math.floor(circleLength),
    circleArea: Math.floor(circleArea),
  };
}
