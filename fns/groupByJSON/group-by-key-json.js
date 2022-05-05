const fs = require('fs')
const output = require("./output.json")

// Accepts the array and key
const groupBy = (array, key) => {
   // Return the end result
   return array.reduce((result, currentValue) => {
     // If an array already present for key, push it to the array. Else create an array and push the object
     (result[currentValue[key]] = result[currentValue[key]] || []).push(
       currentValue
     );
     // Return the current iteration `result` value, this will be taken as next iteration `result` value and accumulate
     return result;
   }, {}); // empty object is the initial value for result object
};

const result = groupBy(output, 'top_code')
fs.writeFile("./result.txt", JSON.stringify(result, 4, 4), (er) =>
{
  if (er)
  {
    console.log('aldaa', er);
    return
  }
  console.log('amjilttai');
})
