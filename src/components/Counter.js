import { useReducer } from 'react'

const counterReducer = (state, action) => {
    switch (action.type) {
        case "increment":
            return {...state, counter: state.counter + action.payload}
        case "decrement":
            return {...state, counter: state.counter - action.payload}
        default:
            return state;
    }
}

const init = (initialState) => {
    return {
        ...initialState,
        counter: initialState.counter + 3
    }
}

const Counter = () => {
        // ------- в редких случаях используюьт 3-й параметр в useReducer ------- //
    const [state, dispatch] = useReducer(counterReducer, {counter: 0,}, init)
  
    return (
        <>
            <h2>{state.counter}</h2>

            <button onClick={() => dispatch({type: "increment", payload: 1})}>+</button>

            <button onClick={() => dispatch({type: "decrement", payload: 1})}>-</button>
        </>
    )
}

export default Counter