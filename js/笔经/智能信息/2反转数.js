// 对于任意一个大于1的正整数，都可以表达为质因子的幂相乘的形式，
// a = p1<sup>k1</sup>·p2<sup>k2</sup> ......pn<sup>kn</sup> ,
// n是x的质因子种类数，p1, p2 . . . . . .pn是a的n种不同质因子，
// k1, k2 . . . . . .kn是a所有质因子对应的幂次，如90 = 2<sup>1</sup> x 3<sup>2</sup>×5<sup>1</sup>。
// 现在定义一种反转，把a每种质因子和对应的幂次进行底数和指数的反转，得到一个新的数，即
//  = k1<sup>P1</sup>· k2<sup>P2</sup> .... . .kn<sup>Pn</sup>,如90对应反转为y = 1<sup>2</sup>  x 2<sup>3</sup>x1<sup>5</sup>=8。
// 现在给你一个x，请算出对应的反转数，这个数字可能很大，请对10<sup>9</sup>+7进行取模

function reversePrimeFactors(x) {
    const MOD = 10**9 + 7
    const factors = primeFactors(x)
    let res = 1
    for(const [prime,power] of factors.entries()) {
        console.log(prime,power)
        res = (res * power ** prime) % MOD
    }
    return res
}

function primeFactors(n) {
    let factors = new Map()
    //质因子分解
    for(let i = 2;i * i <= n;i ++) {
        let cnt = 0
        while(n % i === 0) {
            cnt++
            n = Math.floor(n/i)
            if(cnt)
            factors.set(i,cnt)
        }
    }
    if( n > 1) 
    factors.set(n,1)
    return factors
}
console.log(reversePrimeFactors(90))