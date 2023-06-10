/* eslint-disable @typescript-eslint/no-explicit-any */


export const todoReducer = (initialState: any, action: { type: any; payload: any; }) => {
    switch (action.type) {
        case '[TODO] Add new TODO':
            return [...initialState, action.payload]
    
        default:
            return initialState;
    }
}