import { useState } from "react";

const [state,setState] = useState(0)
function fn () {
    setState(n+1)
    setState(n+1)
    setState(n+1)
}
function fn1 () {
    setState(n => n + 1)
    setState(n => n + 1)
    setState(n => n + 1)
}

// fn的state最终为0
// fn1的state最终为1