import { Ingredients } from "../Model/Ingredient";

export const groceryTypes = {
    ADD_ROW: 'ADD_ROW',
}

export const addGroceryRow = ( amount: number) => async (dispatch) => {

    const resp = await fetch('http://api.icndb.com/jokes/random?limitTo=[nerdy]');
    const body = await resp.json();
    let tempingrdient  = new Ingredients();
    tempingrdient.name = body.value.joke;
    tempingrdient.id = amount;


    // console.log('addGroceryRow action called: '+ tempingrdient.name);

    // let temparrayingrdient : Ingredients[] = [];

    // temparrayingrdient.push(tempingrdient);

    dispatch({

        payload: {
            hi: tempingrdient,
            amount: amount
        },
        type: groceryTypes.ADD_ROW
    })


}
