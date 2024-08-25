// 封装一个useDefer hook，控制组件的渲染
import {useEffect,useState} from 'react'
export function useDefer(maxCount = 100) {
    const [frameCount,setFrameCount] = useState(0)
    let rafId 
    function updateFrame() {
        rafId = requestAnimationFrame(() => {
            setFrameCount(frameCount+1)
        })
    }
}