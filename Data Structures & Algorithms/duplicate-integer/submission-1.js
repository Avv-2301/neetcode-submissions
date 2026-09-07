class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        // for(let i=0; i<nums.length;i++){
        //     for(let j=i+1; j<nums.length;j++){
        //         if(nums[i] === nums[j]){
        //             return true;
        //         }
        //     }
        // }
        // return false;

        let set = new Set();
        for(const num of nums){
            if(set.has(num)){
                return true;
            }
            set.add(num);
        }
        return false;
    }
}
