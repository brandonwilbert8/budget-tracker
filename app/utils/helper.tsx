export function calculateStrokeDasharray(
  circleCircumference: number,
  percentage: number
) {
  // To calculate the strokeDashArray, we need to grab total and times by percentage
  // remainder is total - fill
  const fill: number = circleCircumference * percentage;
  const remainder: number = circleCircumference - fill;
  return [fill, remainder];
}

export function calculateStrokeDasharrayOnFill(
  circleCircumference: number,
  percentage: number,
  fillIn: number
) {
  // To calculate the strokeDashArray, we need to grab total and times by percentage
  // remainder is total - fill * fillIn
  const fill: number = circleCircumference * percentage * fillIn;
  const remainder: number = circleCircumference - fill;
  return [fill, remainder];
}

export function calculateStrokeDashoffset(
  circleCircumference: number,
  totalPrecedingSegments: number,
  firstSegmentOffset?: number
) {
  // strokeDashoffset should be the circumference - All preceding segments' total length
  // // + the First segments offset
  const strokeDashoffset = firstSegmentOffset
    ? circleCircumference - totalPrecedingSegments + firstSegmentOffset
    : circleCircumference - totalPrecedingSegments;
  return strokeDashoffset;
}

export function calculateFillPercentage(amount: number, total: number) {
  return amount / total;
}
