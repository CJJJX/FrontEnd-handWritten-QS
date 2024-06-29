// 获取函数返回的类型，实现原生ReturnType
type Return<T> = T extends (...args:any[]) => infer R ? R : T;
type sum = (a: number,b: number) => number;
type concat = (a: any[], b: any[]) => any[];
let sumRes: Return<sum>;
let concatRes: Return<concat>;
// 获取promise中的泛型
type PromiseType<T> = T extends Promise<infer K> ? K : T;
type pt = PromiseType<Promise<string>>
// 获取套娃promise中的promise的泛型：递归
type PromiseTypee<T> = T extends Promise<infer J> ? PromiseTypee<J> : T;  
type ptt = PromiseTypee<Promise<Promise<string>>>
// 获取函数第一个参数的类型
type firstArg<T> = T extends (firstArg: infer H,...args: any[]) => any ? H : T;
type fa = (name: string,age: number) => void;
// 获取数组中元素的类型
type ArrayType<T> = T extends (infer I)[] ? I : T
type ItemType1 = ArrayType<[string,number]>
type ItemType2 = ArrayType<string[]>