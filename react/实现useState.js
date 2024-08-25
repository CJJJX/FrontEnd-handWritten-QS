

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