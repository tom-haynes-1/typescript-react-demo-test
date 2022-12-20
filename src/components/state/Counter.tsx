import { useReducer } from "react";

// The interface and type features defined below in TS is called Discriminated Unions which is a recommended approach for creating/typing reducer functions.

interface CounterState {
    count: number;
}

interface UpdateAction {
    type: 'increment' | 'decrement';
    payload: number;
}

interface ResetAction {
    type: 'reset';
}

type CounterAction = UpdateAction | ResetAction;

const initialState = { count: 0 };

function reducer(state: CounterState, action: CounterAction) {

    switch (action.type) {
        case 'increment':
            return { count: state.count + action.payload }
        case 'decrement':
            return { count: state.count - action.payload }
        case 'reset': 
            return initialState
        default:
            return state
    }
}

const Counter = () => {

    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <>
            Count: {state.count}
                <button 
                    onClick={() => 
                    dispatch({ type: 'increment', payload: 10 })}
                >
                    Increment by 10
                </button>

                <button 
                    onClick={() => 
                    dispatch({ type: 'decrement', payload: 10 })}
                >
                    Decrement by 10
                </button>
                
                <button 
                    onClick={() => 
                    dispatch({ type: 'reset' })}
                >
                    Reset
                </button>
        </>
    )
}

export default Counter;