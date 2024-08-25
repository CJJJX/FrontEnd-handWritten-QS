// 改造下面代码输出0-9，至少三种方法并解释
for(var i = 0;i < 10;i ++){
	setTimeout(function(){
		console.log(i)
	},1000)
}
// 闭包
for(var i = 0;i < 10;i ++){
    (function(i){
        setTimeout(function(){
            console.log(i)
        },1000)
    })(i)
}
// 使用let
for(let i = 0;i < 10;i ++){
    setTimeout(function(){
        console.log(i)
    },1000)
}
// 使用async/awiat包装setTimeout
async function output(i){
    await new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log(i)
            resolve()
        },1000)
    })
}
for(var i = 0;i < 10;i ++){
    output(i)
}

// handleSubmit() {
//     switch(type) {
//         case 'add':
//             createTemplate()
//         break;
//         case 'edit':
//             updateTemplate()
//         break;        
//     }
//     setVisible(false)
//     setPageIndex(0)
// }
// useEffect(() => {
//     if(!visible)
//     getRecords()
// },[visible,pageIndex])
// getRecords() {
//     const list = await getList(param)
// }