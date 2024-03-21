// 二分查找的数组必须有序
let arr = [1,2,2,2,3,3,4,5,6]
// 通过两次二分查找，第一次找起始位置，第二次找结束位置
function SearchStartAndEnd(target,nums){
    let left = 0
    let right = nums.length -1
    let start = -1 //找不到返回-1
    let end = -1
    while(left<=right){
        let mid = Math.floor((left+right)/2)
        if(nums[mid] >= target){
            if(nums[mid] == target){
                start = mid
            }
            right = mid - 1
        }else{
            left = mid + 1
        }
    }
    left = 0
    right = arr.length -1
    while(left<=right){
        let mid = Math.floor((left+right)/2)
        if(nums[mid] <= target){
            if(nums[mid] == target){
                end = mid
            }
            left = mid + 1
        }else{
            right = mid - 1
        }
    }
    return [start,end]
}
console.log(SearchStartAndEnd(2,arr)) // [1,3]