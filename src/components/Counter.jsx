import { useDispatch, useSelector } from "react-redux";
import { Multiplication, Rnd } from "../action";


const Counter = () => {
    const counter = useSelector((state) => state.counter);

    const dispatch = useDispatch();

    return (
        <div>
            <h2>{counter}</h2>

            <button onClick={() => dispatch({ type: 'INCREMENT' })}> + </button>
            <button onClick={() => dispatch({ type: 'DECREMENT' })}> - </button>
            <button onClick={() => dispatch({ type: 'RESET' })}> res </button>
            <button onClick={() => dispatch(Multiplication())}> * 5 </button>
            <button onClick={() => dispatch(Rnd())}> RND </button>
        </div>

    );
}

export default Counter;