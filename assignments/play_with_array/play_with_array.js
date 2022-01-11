const {map, filter} = require("quixote/vendor/async-1.4.2")

function getEven(arr) {
    /* 
        Return an array containing only even numbers as a result
        Example
            Input: [1,4,5,77,8,90]
            Output: [4,8,90]

        Write you code below
    */
   function isdivis(num){
       return num%2==0
   }
   var result = arr.filter(isdivis)
   return result

}

function multiplyByN(arr, n) {
    /* 
        Return an array whose elements are multiplied by n
        Example
            Input: [1,3,4,55], 3
            Output: [3,9,13,165]
        Write you code below
    */
    arr.forEach((element, i, a) => a[i] = element*n)
    return arr
}

function removeNthElement(arr, n) {
    /*
        Return the array with the element present at index n removed
        Example
            Input: [1,3,4,6,7] 3
            Output: [1,3,4,7]
        Write you code below
    */
   let a =[]
   let i = 0
   for(x of arr){
       if(i!=n){
           a.push(x)
       }
       i++
   }
   return a
}

module.exports = {
    getEven,
    multiplyByN,
    removeNthElement
}