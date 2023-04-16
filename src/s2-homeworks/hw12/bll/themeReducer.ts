const initState = {
    themeId: 1,
}
export type initialStateType=typeof initState
export const themeReducer = (state:initialStateType = initState, action: ChangeActionType): initialStateType => { // fix any
    switch (action.type) {
        // дописать
        case 'SET_THEME_ID':{
            return {
                ...state,
                themeId:action.id
            }
        }

        default:
            return state
    }
}

type ChangeActionType = {
    type:'SET_THEME_ID'
    id: number
}

export const changeThemeId = (id: number): ChangeActionType => ({ type: 'SET_THEME_ID', id }) // fix any
