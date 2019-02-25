
export const weeklyViewTypes = {
    LOAD_WEEK_PLAN: 'LOAD_WEEK_PLAN',
}

export const loadWeeklyPlan = ( amount: number) => async (dispatch) => {
    dispatch({

        payload: {
        },
        type: weeklyViewTypes.LOAD_WEEK_PLAN
    })


}
