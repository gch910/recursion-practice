/*
    Recursive Sort

    Given an array of numbers, write a function that returns a new array of numbers sorted from lowest to highest.

    console.log(sort([])) // prints []
    console.log(sort([9])) // prints [9]
    console.log(sort([5, 4, 3, 2, 1])) // prints [1, 2, 3, 4, 5]
    console.log(sort([14, 5, 10, 6, 3, 4, 21, 16, 9])); // prints [ 3, 4, 5, 6, 9, 10, 14, 16, 21 ]
*/

function sort(nums) {
    if(nums.length <= 1) return nums;
    let lowest = nums[0];
    let index = 0;
    for(let i = 1; i < nums.length; i++) {
        let num = nums[i];
        if(num < lowest) {
            index = i;
            lowest = num;
        }
    }
    let firstVal = nums.splice(index, 1);
    return firstVal.concat(sort(nums))

}

//sort([5, 4, 3, 2, 1])
  //[1].concat(sort([5, 4, 3, 2]))
    //[2].concat(sort([5, 4, 3]))
      //[3].concat(sort(5, 4))
        //[4].concat(sort([5]))
          //return [5]
          //[4].concat([5])
          //[4, 5]
        //[3].concat([4, 5])
        //[3, 4, 5]
    //[2].concat([3, 4, 5])
    //[2, 3, 4, 5]
//[1].concat([2, 3, 4, 5])
//[1, 2, 3, 4, 5]










console.log(sort([5, 4, 3, 2, 1])) // prints [1, 2, 3, 4, 5]
console.log(sort([14, 5, 10, 6, 4, 3, 21, 16, 9])); // prints [ 3, 4, 5, 6, 9, 10, 14, 16, 21 ]

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
    module.exports = sort;
} catch (e) {
    module.exports = null;
}
