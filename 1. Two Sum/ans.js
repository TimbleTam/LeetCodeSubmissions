/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {

    let ans = new Array(0,0);

    for(i = 0; i < nums.length; i++) {
                for(pi = i + 1; pi < nums.length; pi++) {
                    if(nums[i] + nums[pi] == target)
                        {
                           ans[0] = i;
                           ans[1] = pi;
                            return ans;
                        }
                }
            }

    }
