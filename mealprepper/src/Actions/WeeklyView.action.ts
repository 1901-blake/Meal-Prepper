import { Recipe } from "../Model/Recipe";

export const weeklyViewTypes = {
    LOAD_WEEK_PLAN: 'LOAD_WEEK_PLAN',
}

export const loadWeeklyPlan = (amount: number) => async (dispatch) => {

    const resp = await fetch('http://localhost:5500/recipe');
    console.log('resp has a status of: ' + resp.status);

    if (resp.status == 200) {

        const body = await resp.json();
        
        let temprecipe: Recipe[] = [];

        //loop through the array of recipes from body
        for (let index = 0; index < body.length; index++) {
            
        }

        dispatch({

            payload: {
            },
            type: weeklyViewTypes.LOAD_WEEK_PLAN
        })
    }


}
