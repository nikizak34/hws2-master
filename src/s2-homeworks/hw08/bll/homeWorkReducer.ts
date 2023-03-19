import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            let newState = [...state]

            return newState.sort((a, b) =>{
                if(action.payload==='up'){
                    return a.name.localeCompare(b.name)
                }else {
                    return b.name.localeCompare(a.name)
                }

            })



            // need to fix
        }
        case 'check': {

            return state.filter(el => el.age >= action.payload) // need to fix
        }
        default:
            return state
    }
}
