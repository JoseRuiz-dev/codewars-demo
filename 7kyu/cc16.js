
// Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an 
// PREP (Parameters, Returns, Examples, Pseudo Code

function solution(nums) {
    if (nums == null) {
        return []
    } else {
        return nums.sort((a, b) => a - b)
    }
} 