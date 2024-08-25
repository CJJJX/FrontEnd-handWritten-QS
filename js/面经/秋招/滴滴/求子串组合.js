// 输入一个字符串，输出该字符串中字符的所有组合。
// 字符串每个字符均不相同。
// 字符都是英文字母。
// 字符串长度在[1, 9]之间。
// 结果中，项的顺序不做要求。
// 示例：如果输入"abc"，那么输出["a", "b", "c", "ab", "ajs实现求字符串子串的全部组合，输入一个字符串，输出该字符串中字符的所有组合。
// 字符串每个字符均不相同。
// 字符都是英文字母。
// 字符串长度在[1, 9]之间。
// 结果中，项的顺序不做要求。
function getAllCombinations(str) {
    let result = [];

    function helper(prefix, remaining) {
        if (prefix.length > 0) {
            result.push(prefix);
        }
        for (let i = 0; i < remaining.length; i++) {
            helper(prefix + remaining[i], remaining.slice(i + 1));
        }
    }

    helper("", str);
    return result;
}

// 示例
let input = "abcd";
let combinations = getAllCombinations(input);
console.log(combinations);