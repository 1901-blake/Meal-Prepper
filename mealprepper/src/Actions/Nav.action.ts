export const navTypes = {
    TOGGLE: 'NAV_DROPDOWN_TOGGLE',
    TOGGLE1: 'NAV_DROPDOWN_TOGGLE1'
}

export const toggle = () => {
    return {
        payload: {
            dropdown: false
        }, 
        type: navTypes.TOGGLE
    }
}

export const toggle1 = () => {
    return {
        payload: {
            dropdown: false
        }, 
        type: navTypes.TOGGLE1
    }
}