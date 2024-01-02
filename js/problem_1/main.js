var twoSum = function(nums, target) {
    let output = [];
    for(let i = 0; i < nums.length; i++) {
        for(let j = i+1; j < nums.length; j++) {
            if(target === nums[i] + nums[j]) {
                output = [i, j]
                console.log(output)
                return output;
            }
        }
    }
    return output;
};

twoSum([2,7,11,15], 9)