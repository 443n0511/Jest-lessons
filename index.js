//task1
export function addString(a, b) {
  console.log(typeof b === "string")
  if(typeof a === "string" || typeof b === "string"){
    return a + b;
  } else {
    return -1
  }
}

//task2
export function toNumber(str) {
  return parseInt(str, 10)
}

//task3
export function filterOrange(arr){
  return arr.filter((e) => e === "orange")
}
