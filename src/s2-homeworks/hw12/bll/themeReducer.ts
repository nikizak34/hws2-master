const initState = {
    themeId: 1,
}

export const themeReducer = (state = initState, action: ChangeActionType): any => { // fix any
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
