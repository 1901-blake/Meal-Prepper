import { Ingredients } from "../Model/Ingredient";

export const groceryTypes = {
    ADD_ROW: 'ADD_ROW',
    LOAD_ROW: 'LOAD_ROW'

}

export const loadGroceryRow = () => async (dispatch) => {

    const resp = await fetch('http://api.icndb.com/jokes/random?limitTo=[nerdy]');
    const body = await resp.json();
    let tempingrdient  = new Ingredients();
    tempingrdient.name = body.value.joke;
    dispatch({

        payload: {
            Ingredientname: tempingrdient,
        },
        type: groceryTypes.ADD_ROW
    })
}

export const addGroceryRow = (Ingredientname : string, amount: number) => (dispatch) => {

    let tempingrdient  = new Ingredients();
    tempingrdient.name = Ingredientname;
    tempingrdient.id = amount
    console.log(tempingrdient.name);
    dispatch({

        payload: {
            temo: tempingrdient,
        },
        type: groceryTypes.LOAD_ROW
    })
}
