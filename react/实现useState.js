
//立即执行函数,加上return {useState}; 
// 在index.html里引入react-dom和react的cdn地址,然后const {useState} = MyReact
const MyReact = (() => {
    const states = []
    const stateSetters = []
    let stateIndex = 0
    function createState(initialState,stateIndex) {
        return states[stateIndex] !== undefined ? states[stateIndex] : initialState
    }
    function createStateSetter(stateIndex) {
        return function (newState) {
            if(typeof newState === 'function') {
                states[stateIndex] = newState(states[stateIndex])
            }else {
                states[stateIndex] = newState
            }
            render()
        }
    }
    function useState(initialState) {
        states[stateIndex] = createState(initialState,stateIndex)
        if(!stateSetters[stateIndex]) {
            stateSetters.push(createStateSetter(stateIndex))
        }
        const _state = states[stateIndex],
        _setState = stateSetters[stateIndex]
        stateIndex++
        return [_state,_setState]
    }
})()


//简易版
let state = [],
    index = 0;
const defer = (fn) => Promise.resolve().then(fn);
function useState(initialValue) {
    // 保存当前的索引;
    let currentIndex = index;
    if (typeof initialValue === "function") {
        initialValue = initialValue();
    }
    // render时候更新state
    state[currentIndex] = state[currentIndex] === undefined ? initialValue : state[currentIndex];
    const setState = newValue => {
        if (typeof newValue === "function") {
            // 函数式更新
            newValue = newValue(state[currentIndex]);
        }
        state[currentIndex] = newValue;
        if (index!==0) {
            defer(renderComponent);
        }
        index = 0;
    };
    index += 1;
    return [state[currentIndex], setState];
}
