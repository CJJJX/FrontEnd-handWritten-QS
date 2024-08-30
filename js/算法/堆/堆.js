// 堆排序
function swap(arr,i,j) {
    let temp = arr[i]
    arr[i] =arr[j]
    arr[j] = temp
}
// 堆化-从根节点往下
function heapify(arr,n,i) {
    let c1 = 2 * i + 1
    let c2 = 2 * i + 2
    let max = i
    if(c1 < n && arr[c1] > arr[max]) {
        max = c1
    }
    if(c2 < n && arr[c2] > arr[max]) {
        max = c2
    }
    if(max !== i) {
        swap(arr,max,i)
        heapify(arr,n,max)
    }
}
// 建堆-从最后一个节点往上堆化，建堆
function buildHeap(arr,n) {
    let parent = Math.floor(n/2)
    for(let i = parent;i >= 0;i --) {
        heapify(arr,n,i)
    }
    return arr
}
// 堆排序
function heapSort(arr,n) {
    buildHeap(arr,n)
    for(let i = n - 1;i >= 0;i --) {
        swap(arr,i,0)
        heapify(arr,i,0)
    }
}
let arr = [2,5,3,1,6,4]
buildHeap(arr,arr.length)
console.log('建堆结果',arr)
heapSort(arr,arr.length)
console.log('堆排序结果',arr)