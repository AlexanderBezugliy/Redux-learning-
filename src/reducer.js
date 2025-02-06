//reducer - должен быть всегда чистой функцией

const initialState = {
    counter: 0,
    color: 'white',
    users: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_USER':
            return {
                ...state,
                users: [...state.users, action.payload],
            }
        case 'REMOVE_LAST_USER':
            return {
                ...state,
                users: state.users.slice(0, 1),
            }
        case 'CLEAR_USERS':
            return {
                ...state,
                users: [],
            }
        // -----------------------------------------------------
        case 'INCREMENT':
            return {
                ...state,
                counter: state.counter + 1,
            }
        case 'DECREMENT':
            return {
                ...state,
                counter: state.counter - 1,
            }
        case 'RESET':
            return {
                ...state,
                counter: 0,
            }
        case 'MULTIPLICATION':
            return {
                ...state,
                counter: state.counter * 5,
            }
        case 'RND':
            return {
                ...state,
                counter: Math.floor(Math.random() * 100),
            }

        // ---------------------------------------------------------
        case 'CHANGE_COLOR_DEFAULT':
            return {
                ...state,
                color: action.payload,
            }

        case 'CHANGE_COLOR_LIGHTBLUE':
            return {
                ...state,
                color: action.payload,
            }
        case 'CHANGE_COLOR_LIGHTGREEN':
            return {
                ...state,
                color: action.payload,
            }
        default:
            return state;
    }
};

export default reducer;


























// const initialState = {
//     counter: 0
// };

// const reducer = (state = initialState, action) => {
//     switch (action.type) {
//         case "INC":
//             return {
//                 ...state,
//                 counter: state.counter + 1
//             };
//         case "DEC":
//             return {
//                 ...state,
//                 counter: state.counter - 1
//             };
//         case "RND":
//             return {
//                 ...state,
//                 counter: state.counter * action.payload
//             };
//         case "RESET":
//             return {
//                 ...state,
//                 counter: 0
//             }
//         default:
//             return state;
//     }
// }

// export default reducer;