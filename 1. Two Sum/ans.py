class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        #grabs the length of the nums list given
        nI = len(nums)

        #runs a for loop for x value at beginning of list
        for x in range(0, nI):
            for y in range(x + 1, nI):
                if nums[x] + nums[y] == target:
                    ans = [x, y]
                    return ans

