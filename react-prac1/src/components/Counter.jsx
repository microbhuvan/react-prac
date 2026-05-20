import {useDispatch, useSelector} from "react-redux"
import {increment, decrement} from "../features/counterSlice"


function Counter(){

    const count = useSelector((state)=>state.counter.value)

    const dispatch = useDispatch();

    return(
        <div>
            <h1>count value = {count}</h1>

            <button onClick = {() => dispatch(increment())}>
                Increment
            </button>

            <button onClick = {() => dispatch(decrement())}>
                Decrement
            </button>
        </div>
    )
}

export default Counter