
export const enterNewRecipeTypes = {
    ADD_INGREDIENT: 'ENTER_NEW_RECIPE_ADD_INGREDIENT', 
    UPDATE_AMOUNT: 'ENTER_NEW_RECIPE_UPDATE_AMOUNT',
    UPDATE_MEASURE: 'ENTER_NEW_RECIPE_UPDATE_MEASURE', 
    UPDATE_INGREDIENT: 'ENTER_NEW_RECIPE_UPDATE_INGREDIENT'
}

export const addIngredient = (amount: number, measure: string, ingredient: string) => {
    return {
        payload: {
            amount: amount, 
            measure: measure, 
            ingredient: ingredient
        }, 
        type: enterNewRecipeTypes.ADD_INGREDIENT
    }
}

export const updateAmount = (event) => {
    return {
        payload: {
            amount: event.target.value
        }, 
        type: enterNewRecipeTypes.UPDATE_AMOUNT
    }
}

export const updateMeasure = (event) => {
    return {
        payload: {
            measure: event.target.value
        }, 
        type: enterNewRecipeTypes.UPDATE_MEASURE
    }
}

export const updateIngredient = (event) => {
    return {
        payload: {
            ingredient: event.target.value
        }, 
        type: enterNewRecipeTypes.UPDATE_INGREDIENT
    }
}
