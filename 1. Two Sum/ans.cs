public class Solution {
    public int[] TwoSum(int[] nums, int target) {
        for(int i = 0; i < nums.Length; i++) {
                for(int pi = i + 1; pi < nums.Length; pi++) {
                    if(nums[i] + nums[pi] == target) return new int[] {i,pi};
                }
            }
        return Array.Empty < int > ();
    }
}