// 按正确顺序排列版本号
// ex: ["1.0.1", "1", "1.3.3", "1.0.12"] -> ["1", "1.0.1", "1.0.12", "1.3.3"]
​
function sortVersion(versions) {
    let numVersions = versions.split(',').map(version => version.split('.').map(Number))
    numVersions.sort((v1,v2) => {
        for(let i = 0;i < v1.length && i < v2.length;i ++){
            if(v1[i] !== v2[i])
            return v1[i] - v2[i]
        }
        return v1.length - v2.length
    })
    return numVersions.map(version => version.join('.'))
}