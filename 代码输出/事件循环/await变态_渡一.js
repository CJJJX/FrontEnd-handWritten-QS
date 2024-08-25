
async function asy1(){
    console.log(1)
    await asy2()
    console.log(2)
}

const asy2 = async () => {
    await (async () => {
        await (() => {
            console.log(3)
        })()
        console.log(4)
    })()
}

const asy3 = async () => {
    Promise.resolve().then(() => {
        console.log(6)
    })
}

asy1()
console.log(7)
asyc3()
// 1 3 7 4 6 2
// ！！！asy2完成后才能将后面的2推入微队列

// useEffect(() => {
//     let ownUin
//     async function checkWhiteList() {
//         ownUin = await fetch()
//         if(ownUin) {
//             setShowLink(true)
//         }
//     }
//     async function getTemplates() {
//         const {templates} = await getTemplates()
//     }
//     checkWhiteList()
//     if(ownUin)
//     getTemplates()
// },[])