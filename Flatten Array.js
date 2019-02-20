function flattenArray(arr) {
  let returnArr = [];
  let exchangeArr = [];

  let j = 0;

  for(let i = 0; i < arr.length; i++){
   if(arr[i].length == undefined && arr[i] != null){
      returnArr[j] = arr[i];
      j++;
    } else if(typeof arr[i] == "string"){
      returnArr[j] = arr[i];
      j++;
    } else {
      exchangeArr = flattenArray(arr[i]);
      for(let k = 0; k < exchangeArr.length; k++){
        returnArr[j] = exchangeArr[k];
        j++;
      }
    }
  }
  return returnArr;
}

console.log("Original array:  [1, [2], [3, [[4]]]] \t\tflattened Array: " + flattenArray([1, [2], [3, [[4]]]]));

