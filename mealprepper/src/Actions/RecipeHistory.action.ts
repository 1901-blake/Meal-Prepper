import { Recipe } from "../Model/Recipe";

export const recipeHistoryTypes = {
    LOAD_RECIPE_HISTORY_ROW: 'LOAD_ROW'

}

export const loadrecipeHistoryRow = () => async (dispatch) => {

    // const tempuser = 0;

    // const resp = await fetch('http://ec2-18-225-37-190.us-east-2.compute.amazonaws.com:5500/recipe');
    // console.log('resp has a status of: ' + resp.status);


    // if (resp.status == 200) {

    //     const body = await resp.json();
        
    //     let temprecipe: Recipe[] = [];

    //     for (let index = 0; index < body.length; index++) {

    //         if (body[index].id == tempuser) {
    //             temprecipe[index] = new Recipe();
    //             temprecipe[index].recipe_id = body[index].id;
    //             temprecipe[index].name = body[index].name;
    //             temprecipe[index].description = body[index].description;
    //             temprecipe[index].instructions = body[index].instructions;
    //         }
    //         else if(tempuser == 0){
    //             temprecipe[index] = new Recipe();
    //             temprecipe[index].recipe_id = body[index].id;
    //             temprecipe[index].name = body[index].name;
    //             temprecipe[index].description = body[index].description;
    //             temprecipe[index].instructions = body[index].instructions;
    //         }
    //         else{

    //         }
    //         dispatch({

    //             payload: {
    //                 recipehis: temprecipe,
    //             },
    //             type: recipeHistoryTypes.LOAD_RECIPE_HISTORY_ROW
    //         })
    //     }

        
    // }
}
