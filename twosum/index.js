/*
?       TWO SUMS
*   nums = [1,5,9]
!   target = 10;
    nums[0,2] = 1 + 9;          
    nums[1,1] = 5 + 5;      //!     Reusing is not available 

    timeComplexity  = o(n)
    spaceComplexity = o(n)

    ? TIP: use Hashmap


    1  + 5  = 10 ? false
    1 + 9 = 10? true

    map = {1:0, 5:1}
    i = 2
    value = 9
    complementPair = 10 - 9 = 1
    [0,2]
    

*/

function twoSum(collection, target) {
  let map = {};
  let value, complementPair;

  for (i = 0; i < collection.length; i++) {
    value = collection[i];
    complementPair = target - value;
    if (map[complementPair] !== undefined) {
      return [map[complementPair], i];
    } else {
      map[value] = i;
    }
  }
}

const nums = [2, 7, 11, 15];
const target = 9;
const value = twoSum(nums, target);
console.log(value);
