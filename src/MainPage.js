import React from "react";
import { useSelector } from "react-redux";
import Users from "./components/Users";
import ChangeTheme from "./components/ChangeTheme";
import Counter from "./components/Counter";


const MainPage = () => {
    const color = useSelector((state) => state.color);

    return (
        <div style={{ backgroundColor: color }}>
            <Counter />
            
            <ChangeTheme />
            
            <Users />
        </div>
    )
}

export default MainPage;



























// const Counter = () => {
//     const counter = useSelector(state => state.counter); //получаем на прямую значение из store используя хук 

//     const dispatch = useDispatch();


//     return (
//         <div className="jumbotron">
//             <h1>{counter}</h1>
//             <button onClick={() => dispatch(dec())} className="btn btn-primary">DEC</button>
//             <button onClick={() => dispatch(inc())} className="btn btn-primary">INC</button>
//             <button onClick={() => dispatch(rnd())} className="btn btn-primary">RND</button>
//             <button onClick={() => dispatch(reset())} className="btn btn-primary">reset</button>
//         </div>
//     )
// }

// export default Counter;

