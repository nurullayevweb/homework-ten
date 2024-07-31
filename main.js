// homework 1


// var numbers = [3.02, -3.65, 5, -9];

// function normNum(array){
//     var newArr=[];
    
//     for (var num of array) {
//         newArr.push(Math.abs(Math.round(num)))
//     }
//     return newArr
// }
// console.log(normNum(numbers));




// homework 2

// var numbers = [1, 3.2, -5, 8.7];

// function normNum(array){
//     var result=0;
    
//     for (var num of array) {
//         var newNumbers = Math.abs(Math.round(num));
//         result +=newNumbers;
//     }
//     return result;
// }
// console.log(normNum(numbers));




// homework 3

function findLargeText(txt) {
    var textArray = txt.split(" ");
    var bigText = textArray[0];
  
    for (var text of textArray) {
      if (text.length > bigText.length) {
        bigText = text;
      }
    }
    return bigText;
  }
  console.log(findLargeText("The most wanted free SVG user interface icons"));