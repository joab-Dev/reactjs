import { calculateCircleArea, add, PI } from "./math.js";
import df, { formate } from "./dateFormather.js"

const area = calculateCircleArea(10);
console.log(area);
console.log(PI);
console.log(add(4,5));

df(new Date(formate))
