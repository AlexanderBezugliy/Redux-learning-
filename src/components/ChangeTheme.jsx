import { useDispatch, useSelector } from "react-redux";
import { ChangeColorDefault, ChangeColorLightBlue, ChangeColorLightGreen } from "../action";


const ChangeTheme = () => {
    const changeTheme = useSelector((state) => state.color);
    
    const dispatch = useDispatch();


    return (
        <div>
            <h3>{changeTheme}</h3> 

            <button onClick={() => dispatch(ChangeColorDefault('white'))}> Change Color (defoult)</button>
            <button onClick={() => dispatch(ChangeColorLightBlue())}> Change Color (lightblue)</button>
            <button onClick={() => dispatch(ChangeColorLightGreen())}> Change Color (lightgreen)</button>
        </div>
    );
}

export default ChangeTheme;