//ACTION CREATERS:

export const AddUsers = (user) => {
    return {
        type: 'ADD_USER',
        payload: user,
    }
}

export const RemoveLastUsers = () => {
    return {
        type: 'REMOVE_LAST_USER',
    }
}

export const ClearUsers = (user) => {
    return {
        type: 'CLEAR_USERS',
    }
}
// ---------------------------------------------
export const IncrementAction = () => {
    return {
        type: 'INCREMENT',
    }
}

export const DecrementAction = () => {
    return {
        type: 'DECREMENT',
    }
}

export const ResetAction = () => {
    return {
        type: 'RESET',
    }
}

export const Multiplication = () => {
    return {
        type: 'MULTIPLICATION',
    }
}

export const Rnd = () => {
    return {
        type: 'RND',
    }
}
// ---------------------------------------------
export const ChangeColorDefault = (color) => {
    return {
        type: 'CHANGE_COLOR_DEFAULT',
        payload: color,
    }
}

export const ChangeColorLightBlue = () => {
    return {
        type: 'CHANGE_COLOR_LIGHTBLUE',
        payload: 'lightblue',
    }
}

export const ChangeColorLightGreen= () => {
    return {
        type: 'CHANGE_COLOR_LIGHTGREEN',
        payload: 'lightgreen',
    }
}


















// export const inc = () => {
//     return {
//         type: 'INC',
//     }
// };
// export const dec = () => {
//     return {
//         type: 'DEC',
//     }
// };

// export const rnd = () => { 
//     return {
//         type: 'RND', 
//         payload: Math.floor(Math.random() * 100) 
//     }
// };

// export const reset = () => {
//     return {
//         type: 'RESET',
//     } 
// };

