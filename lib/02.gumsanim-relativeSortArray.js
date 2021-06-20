/*
Given two arrays arr1 and arr2, the elements of arr2 are distinct, and all elements in arr2 are also in arr1.

Sort the elements of arr1 such that the relative ordering of items in arr1 are the same as in arr2.  Elements that don't appear in arr2 should be placed at the end of arr1 in ascending order.

 

Example 1:

Input: arr1 = [2,3,1,3,2,4,6,7,9,2,19], arr2 = [2,1,4,3,9,6]
Output: [2,2,2,1,4,3,3,9,6,7,19]
 

Constraints:

1 <= arr1.length, arr2.length <= 1000
0 <= arr1[i], arr2[i] <= 1000
All the elements of arr2 are distinct.
Each arr2[i] is in arr1.
*/



/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */

 var relativeSortArray = function(arr1, arr2) {
    // 1. count numbers in arr1
    // 2. collect numbers in arr1 based on arr2
    // 3. append the rest numbers
    
    const count = new Map();
    for(let num of arr1){
        if(count.has(num)){
            count.set(num,count.get(num)+1);
        } else {
            count.set(num,1);
        }
    }
    
    const result = [];
    
    for(let num of arr2){
        if(count.has(num)){
            let amount = count.get(num);
            while(amount>0){
                result.push(num);
                amount -=1;
            }
            count.delete(num);
        }
    } 

     for(let num = 0; num<=1000; num++){
        if(count.has(num)){
            let amount = count.get(num);
            while(amount>0){
                result.push(num);
                amount -=1;
            }
            count.delete(num);
        }
    }   
    
    return result;
    
};

export default relativeSortArray;