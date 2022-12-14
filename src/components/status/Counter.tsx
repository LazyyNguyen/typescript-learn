import {useReducer} from 'react';

const inititalState = {count: 0}
type CounterState = {
    count: number,
}
type UpdateState = {
    type: 'increment' | 'decrement',
    payload: number
}
type ResetState ={
    type: 'reset',
    payload?: number
}
type CounterAction = UpdateState | ResetState

function reducer(state: CounterState, action: CounterAction){
    switch(action.type){
        case 'increment':
            return {count: state.count + action.payload}
        case 'decrement':
            return {count: state.count - action.payload}
        case 'reset':
            return inititalState
        default:
            return state
    }
}

export const Counter = () =>{
    const [state, dispatch] = useReducer(reducer,inititalState)
    return (
        <>
            Count: {state.count}
            <button onClick={()=> dispatch({type:'increment', payload:10})}>Increment 10</button>
            <button onClick={()=> dispatch({type:'decrement', payload:10})}>Decrement 10</button>

            <button onClick={()=> dispatch({type:'reset'})}>Reset</button>
        </>
    )
}