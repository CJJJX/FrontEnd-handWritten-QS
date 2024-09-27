// 有一种机器人，只能朝一个固定方向跳跃（不能转向，不能往回跳），机器人有多种跳跃模式，每种模式仅距离不同，每种跳跃模式可以跳跃任意次，现在给定机器人的跳跃模式 modes ，以及目标地点离机器人的距离 distance ，请问要跳跃到目标地点，机器人最少需要跳跃多少步？如果无法准确跳到目标地点，返回﹣1。如果距离为0，可认为无需跳跃，返回0。
// modes 中的数字不会重复
// 示例1
// 输入
// [2,4,5],12
// 输出
// 3
// 说明
// 跳跃方式为2+5+5
// 示例2
// 输入
// [7,9,11],16
// 输出
// 2
// 说明
// 跳跃方式为7+9
// 示例3
// 输入
// [8],9
// 输出
// -1
// 说明
// 无法跳跃到8上
function jumpToDistance(modes,distance) {
    // 完全背包
    // dp[j] 的 含义为跳到下标为j的位置需要的最小步数,Infinity表示暂不可达
    let dp = Array.from({length: distance + 1}).fill(Infinity)
    dp[0] = 0 //到下标为0的最小步数为0
    // 先物品后背包
    for(let mode of modes) {
        for(let i = mode;i <= distance;i ++) {
            if(dp[i - mode] !== Infinity) {
                dp[i] = Math.min(dp[i],dp[i - mode] + 1)
            }
        }
    }
    return dp[distance] !== Infinity ? dp[distance] : -1
}
console.log(jumpToDistance([2,4,5],12)) //3
console.log(jumpToDistance([7,9,11],16)) //2
console.log(jumpToDistance([8],9)) //-1