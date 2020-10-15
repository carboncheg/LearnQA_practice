// first option

let result2 = function(nums, k) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i+1; j < nums.length; j++) {
        if (nums[i] + nums[j] === k) return true;
        }
    }
    return false;
    };

console.log(result2([1, 3, 12, -1, 2], 5));


// second option

let result = function(nums, k) {
    return nums.some((n1, i, arr) => arr.some((n2, j) => i !== j && n1 + n2 === k));
    };

console.log(result([1, 3, 12, -1, 2], 5));